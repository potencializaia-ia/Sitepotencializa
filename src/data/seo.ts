// Informações que o Google, o WhatsApp e as redes sociais leem do site.
// São inseridas no <head> do index.html na hora do build (ver vite.config.ts).

/**
 * Endereço oficial do site, sem barra no final.
 * ⚠️ CONFIRMAR: troque pelo domínio definitivo antes de publicar.
 * A imagem de compartilhamento só aparece no WhatsApp/Instagram com o endereço completo.
 */
export const SITE_URL = "https://potencializaai.com";

export const seo = {
  title: "Criação de Sites Profissionais | Potencializa",
  description:
    "Sites sob medida para empresas, prontos em até 2 semanas, a partir de R$ 300. Seguros, otimizados para o Google e com o 1º mês de acompanhamento grátis.",
  shareTitle: "Potencializa | Seu cliente procura. Sua empresa aparece.",
  shareImage: "/og-image.jpg",
  shareImageAlt: "Potencializa: criação de sites profissionais para empresas",
  themeColor: "#0F172A",
};

export const business = {
  name: "Potencializa",
  description: "Criação de sites profissionais e landing pages para empresas, com acompanhamento mensal e agentes de IA.",
  phone: "+55 54 99141-2254",
  email: "potencializa.ia@gmail.com",
  city: "Passo Fundo",
  state: "RS",
  country: "BR",
  sameAs: ["https://www.instagram.com/potencializa.ia/", "https://www.linkedin.com/company/potencializa-ia"],
};
