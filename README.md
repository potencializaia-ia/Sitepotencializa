# Site da Potencializa

Site institucional da Potencializa, focado na criação de sites para empresas (Site Profissional e Landing Page), com portfólio, planos e acompanhamento mensal.

Feito com **React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion**. Publicado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev:vite      # só o site, em http://localhost:5173
npm run dev           # site + servidor da API (usado pelas páginas de Diagnóstico/SaaS)
npm run build         # gera a versão de produção em dist/
```

As variáveis de ambiente estão listadas em `.env.example`. A página inicial não depende delas; as páginas de Diagnóstico/SaaS usam o Supabase e precisam de `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Sites do portfólio (clientes e modelos) | `src/data/portfolio.ts` + prints em `public/portfolio/` |
| Planos, preços e acompanhamento | `src/sections/Pricing.tsx` |
| Perguntas frequentes | `src/sections/FAQ.tsx` |
| Número do WhatsApp | `src/lib/contact.ts` |
| Ordem das seções da página inicial | `src/App.tsx` |
| Cores, fontes e utilitários visuais | `src/index.css` e `tailwind.config.js` |
| Páginas de automação (`/servicos/...`) | `src/data/services.ts` e `src/pages/ServicePage.tsx` |

### Adicionar um site ao portfólio

1. Tire um print do topo do site em 1440 × 900 px e salve em `public/portfolio/nome.jpg`.
2. Em `src/data/portfolio.ts`, copie um item existente e preencha título, segmento, `kind` (`"Cliente"` ou `"Modelo"`), `type` (`"Site Profissional"` ou `"Landing Page"`), descrição, imagem, link e até 3 tags.

Clientes aparecem de 2 em 2 e modelos de 3 em 3 no computador; no celular, um por vez, arrastando para o lado.

## Seções guardadas (fora da página por enquanto)

- `src/sections/FinalCTA.tsx`: chamada final "Vamos começar?"
- `src/sections/AutomationTeaser.tsx`: "Além de sites", com links para as páginas de automação

Para voltar a exibir, importe e adicione a seção em `src/App.tsx`.
