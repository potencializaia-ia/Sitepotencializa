import type { Plugin } from "vite";
import { SITE_URL, seo, business } from "./src/data/seo.ts";
import { faqItems } from "./src/data/faq.ts";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const jsonLd = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

/**
 * Escreve no <head> do index.html o título, a descrição, a prévia de compartilhamento
 * (WhatsApp, Instagram, LinkedIn) e as informações estruturadas para o Google
 * (ficha da empresa e perguntas frequentes). Os textos vêm de src/data/seo.ts e src/data/faq.ts.
 */
export function seoPlugin(): Plugin {
  return {
    name: "potencializa-seo",
    transformIndexHtml(html) {
      const image = `${SITE_URL}${seo.shareImage}`;

      const meta = [
        `<title>${esc(seo.title)}</title>`,
        `<meta name="description" content="${esc(seo.description)}" />`,
        `<meta name="theme-color" content="${seo.themeColor}" />`,
        `<link rel="canonical" href="${SITE_URL}/" />`,

        `<meta property="og:type" content="website" />`,
        `<meta property="og:locale" content="pt_BR" />`,
        `<meta property="og:site_name" content="${esc(business.name)}" />`,
        `<meta property="og:url" content="${SITE_URL}/" />`,
        `<meta property="og:title" content="${esc(seo.shareTitle)}" />`,
        `<meta property="og:description" content="${esc(seo.description)}" />`,
        `<meta property="og:image" content="${image}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${esc(seo.shareImageAlt)}" />`,

        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(seo.shareTitle)}" />`,
        `<meta name="twitter:description" content="${esc(seo.description)}" />`,
        `<meta name="twitter:image" content="${image}" />`,
      ];

      const businessData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: business.name,
        description: business.description,
        url: `${SITE_URL}/`,
        image,
        telephone: business.phone,
        email: business.email,
        priceRange: "R$ 150 - R$ 300",
        address: {
          "@type": "PostalAddress",
          addressLocality: business.city,
          addressRegion: business.state,
          addressCountry: business.country,
        },
        areaServed: { "@type": "Country", name: "Brasil" },
        sameAs: business.sameAs,
      };

      const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      };

      return html
        .replace(/<title>[\s\S]*?<\/title>/, "")
        .replace("</head>", `    ${[...meta, jsonLd(businessData), jsonLd(faqData)].join("\n    ")}\n  </head>`);
    },
  };
}
