// ─────────────────────────────────────────────────────────────
//  PORTFÓLIO DE SITES
//  Para adicionar um site novo, copie um dos objetos abaixo e
//  preencha os campos. Salve o print em /public/portfolio/ e
//  referencie como "/portfolio/nome.jpg" (1440 x 900 px, topo da página).
//
//  Os sites vêm de https://modelos.potencializaai.com
//  (repositório potencializaia-ia/Modelos_Sites).
//  kind "Cliente" = site real feito para uma empresa (aparece em destaque, primeiro).
//  kind "Modelo"  = modelo de demonstração.
//  Clientes aparecem de 2 em 2 e modelos de 3 em 3 (com setas para ver mais).
// ─────────────────────────────────────────────────────────────

export const MODELOS_URL = "https://modelos.potencializaai.com";

export interface PortfolioItem {
  /** Nome do modelo ou do cliente */
  title: string;
  /** Segmento, também usado como filtro */
  segment: string;
  /** "Modelo" para demonstrações, "Cliente" para sites reais de clientes (ficam em destaque) */
  kind: "Modelo" | "Cliente";
  /** Tipo de site, exibido como etiqueta no card */
  type: "Site Profissional" | "Landing Page";
  /** Frase curta sobre o site */
  description: string;
  /** Print do site em /public/portfolio/ */
  image?: string;
  /** Link do site no ar (abre em nova aba) */
  url?: string;
  /** Recursos de destaque (até 3) */
  tags: string[];
  /** Cor usada na prévia ilustrativa quando não há imagem */
  accent?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    title: "D'Gustame Restaurante",
    segment: "Restaurante",
    kind: "Cliente",
    type: "Site Profissional",
    description: "Restaurante familiar no Centro de Passo Fundo, com buffet do almoço, cardápio completo e localização.",
    image: "/portfolio/dgustame.jpg",
    url: `${MODELOS_URL}/dgustame`,
    tags: ["Cardápio online", "Localização", "Otimizado para o Google"],
  },
  {
    title: "Delícias e Sabores da Mamãe",
    segment: "Confeitaria",
    kind: "Cliente",
    type: "Site Profissional",
    description: "Confeitaria artesanal com cardápio de docinhos e encomendas feitas direto pelo WhatsApp.",
    image: "/portfolio/delicias-mamae.jpg",
    url: `${MODELOS_URL}/delicias-mamae`,
    tags: ["Encomendas pelo WhatsApp", "Cardápio", "Galeria"],
  },
  {
    title: "Lumident",
    segment: "Odontologia",
    kind: "Modelo",
    type: "Site Profissional",
    description: "Clínica odontológica com visual azul e leve, ilustração 3D de dente e agendamento online.",
    image: "/portfolio/lumident.jpg",
    url: `${MODELOS_URL}/lumident`,
    tags: ["Agendamento online", "Serviços e valores", "Equipe"],
  },
  {
    title: "Movimenta",
    segment: "Pilates e Fisioterapia",
    kind: "Modelo",
    type: "Site Profissional",
    description: "Clínica em rosa claro, com profissionais em destaque, agendamento, serviços, equipe e etapas do atendimento.",
    image: "/portfolio/movimenta-fisioterapia.jpg",
    url: `${MODELOS_URL}/movimenta-fisioterapia`,
    tags: ["Agendamento pelo WhatsApp", "Depoimentos", "Etapas"],
  },
  {
    title: "Sorriso",
    segment: "Odontologia",
    kind: "Modelo",
    type: "Site Profissional",
    description: "Clínica odontológica em painel branco com toques lilás, com foco em tratamentos e credibilidade.",
    image: "/portfolio/sorriso.jpg",
    url: `${MODELOS_URL}/sorriso`,
    tags: ["Tratamentos", "Prova social", "Visual moderno"],
  },
  {
    title: "Sara Scapini Editorial",
    segment: "Pilates e Fisioterapia",
    kind: "Modelo",
    type: "Site Profissional",
    description: "Pilates em estilo blog editorial: logo manuscrito, mandala, carrossel de aulas e grade de conteúdos.",
    image: "/portfolio/sara-editorial.jpg",
    url: `${MODELOS_URL}/sara-editorial`,
    tags: ["Carrossel de aulas", "Busca de conteúdos", "Fotos reais"],
  },
  {
    title: "Dentora",
    segment: "Odontologia",
    kind: "Modelo",
    type: "Site Profissional",
    description: "Visual premium com foto em tela cheia, depoimentos e etapas do tratamento. Versão em inglês.",
    image: "/portfolio/dentora.jpg",
    url: `${MODELOS_URL}/dentora`,
    tags: ["Foto em tela cheia", "Depoimentos", "Em inglês"],
  },
];
