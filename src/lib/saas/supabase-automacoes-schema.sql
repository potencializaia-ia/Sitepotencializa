-- ============================================================
-- Schema Supabase – Automações identificadas por lead
-- Cada automação sugerida pela IA vira UMA LINHA nesta tabela,
-- facilitando consulta/verificação como uma planilha.
-- Execute este SQL no SQL Editor do Supabase.
-- ============================================================

CREATE TABLE IF NOT EXISTS lead_automacoes (
  id              BIGSERIAL PRIMARY KEY,
  lead_id         BIGINT REFERENCES leads(id) ON DELETE CASCADE,

  -- Dados do lead (denormalizados p/ consulta direta, sem JOIN)
  nome            TEXT,
  email           TEXT,
  empresa         TEXT,
  setor           TEXT,

  -- Dados da automação
  prioridade      INTEGER,
  titulo          TEXT NOT NULL,
  descricao       TEXT,
  tipo_agente     TEXT,
  complexidade    TEXT,
  horas_mes       INTEGER,
  economia_mes    NUMERIC(12, 2),
  roi_12meses     NUMERIC(12, 2),
  produtos        TEXT,           -- produtosPotencializa separados por vírgula

  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para consulta
CREATE INDEX IF NOT EXISTS lead_automacoes_lead_idx    ON lead_automacoes (lead_id);
CREATE INDEX IF NOT EXISTS lead_automacoes_empresa_idx ON lead_automacoes (empresa);
CREATE INDEX IF NOT EXISTS lead_automacoes_created_idx ON lead_automacoes (created_at DESC);

-- Row Level Security: apenas service_role pode ler/escrever
ALTER TABLE lead_automacoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Somente service_role pode inserir automacoes"
  ON lead_automacoes FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Somente service_role pode ler automacoes"
  ON lead_automacoes FOR SELECT
  TO service_role
  USING (true);

-- View "planilha" pronta para consulta (lead + automação lado a lado)
CREATE OR REPLACE VIEW automacoes_planilha AS
SELECT
  a.id,
  a.created_at,
  a.empresa,
  a.nome,
  a.email,
  a.setor,
  a.prioridade,
  a.titulo,
  a.tipo_agente,
  a.complexidade,
  a.horas_mes,
  a.economia_mes,
  a.roi_12meses,
  a.produtos,
  a.descricao,
  a.lead_id
FROM lead_automacoes a
ORDER BY a.created_at DESC, a.prioridade ASC;
