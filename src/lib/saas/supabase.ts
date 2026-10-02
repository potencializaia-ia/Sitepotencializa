import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { FormData, AnalysisResult, AutomacaoCatalogo } from "../../types/saas.js";

// Lazy initialization — só cria o client quando chamado (não no build)
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_client) {
    const url = process.env.VITE_SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error("Supabase env vars not set: VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY");
    }
    _client = createClient(url, key);
  }
  return _client;
}

export async function saveLeadToSupabase(
  form:   FormData,
  result: AnalysisResult
): Promise<void> {
  const supabase = getClient();

  // Monta um resumo textual do contexto para manter compatibilidade com colunas existentes
  const descricaoContexto = [
    `Ferramentas: ${(form.ferramentas ?? []).join(", ")}`,
    `Tarefas manuais: ${(form.tarefasManuais ?? []).join(", ")}`,
    `Volume: ${form.volumeMensal}`,
    `Objetivo: ${form.objetivo}`,
    (form.jaAutomatizados ?? []).length > 0
      ? `Já automatizados: ${form.jaAutomatizados!.join(", ")}`
      : "",
  ].filter(Boolean).join(" | ");

  const { data: leadRow, error } = await supabase
    .from("leads")
    .insert({
      nome:             form.nome,
      email:            form.email,
      telefone:         form.telefone,
      empresa:          form.empresa,
      setor:            form.setor,
      tamanho:          form.tamanho,
      descricao:        descricaoContexto,
      dor:              form.contextoAdicional ?? (form.objetivo ?? []).join(", ") ?? "",
      orcamento:        form.orcamento,
      resultado:        result,
      total_horas_mes:  result.totalHorasMes,
      total_economia:   result.totalEconomiaMes,
      roi_12meses:      result.totalRoi12meses,
      created_at:       new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Supabase insert failed: ${error.message}`);
  }

  // Grava cada automação como uma linha própria (planilha de consulta)
  const automacaoRows = (result.automacoes ?? []).map((a) => ({
    lead_id:      leadRow.id,
    nome:         form.nome,
    email:        form.email,
    empresa:      form.empresa,
    setor:        form.setor,
    prioridade:   a.prioridade,
    titulo:       a.titulo,
    descricao:    a.descricao,
    tipo_agente:  a.tipoAgente,
    complexidade: a.complexidade,
    horas_mes:    a.horasMes,
    economia_mes: a.economiaMes,
    roi_12meses:  a.roi12meses,
    produtos:     (a.produtosPotencializa ?? []).join(", "),
  }));

  if (automacaoRows.length > 0) {
    const { error: autoError } = await supabase
      .from("lead_automacoes")
      .insert(automacaoRows);

    if (autoError) {
      throw new Error(`Supabase automacoes insert failed: ${autoError.message}`);
    }
  }
}

// ─── Conta total de leads gerados (para prova social na hero) ────────────────
// Retorna 0 em caso de erro para não quebrar a página
export async function getLeadCount(): Promise<number> {
  try {
    const supabase = getClient();
    const { count, error } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true });
    if (error) return 0;
    return count ?? 0;
  } catch {
    return 0;
  }
}

// ─── Busca automações do catálogo por setor (matching flexível) ───────────────
// Ex: "Saúde / Clínicas" → busca por "Saúde" OR "Clínicas" OR "Todos"
export async function fetchCatalogAutomations(
  setor: string
): Promise<AutomacaoCatalogo[]> {
  const supabase = getClient();

  // Extrai palavras-chave do setor (ignora palavras curtas e conjunções)
  const keywords = setor
    .split(/[\s\/]+/)
    .map((w) => w.trim())
    .filter((w) => w.length > 2 && !["de", "do", "da", "e"].includes(w.toLowerCase()));

  // Monta filtro OR: qualquer keyword OU "Todos"
  const filters = [
    ...keywords.map((k) => `setores.ilike.%${k}%`),
    "setores.ilike.%Todos%",
  ].join(",");

  const { data, error } = await supabase
    .from("automacoes_catalogo")
    .select("*")
    .or(filters)
    .limit(30);

  if (error) {
    console.error("Erro ao buscar catálogo:", error.message);
    return [];
  }

  return (data ?? []) as AutomacaoCatalogo[];
}
