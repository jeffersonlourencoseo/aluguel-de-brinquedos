# Aluguel de Brinquedos

Site profissional e otimizado para aluguel de brinquedos infantis, desenvolvido com foco absoluto em SEO Local, performance e conversão.

---

## Status

**Pronto para Produção**

---

## Tecnologias

- **Framework:** Astro 4.x (SSR via Vercel)
- **Estilização:** Tailwind CSS
- **Deploy:** Vercel
- **Integrações:**
  - `@astrojs/tailwind` — Estilos utilitários
  - `@astrojs/sitemap` — Geração automática de sitemap XML
  - `@astrojs/vercel` — Adaptador SSR para deploy na Vercel

---

## Arquitetura de SEO

- **Central de Dados (`src/data/config.ts`):** Fonte única de verdade para NAP (Nome, Endereço, Telefone), horários de funcionamento, geo-coordenadas e área de atendimento.
- **Schema.org:** Componente `SchemaLocalBusiness.astro` injeta JSON-LD completo de `LocalBusiness` em todas as páginas.
- **Meta Tags & Open Graph:** Componente `SEO.astro` gerencia title, description, canonical, Open Graph e Twitter Cards dinamicamente.
- **Sitemap XML:** Gerado automaticamente na build a partir do domínio centralizado.
- **SEO Local:** Estrutura otimizada para ranqueamento no Google Maps e buscas por proximidade.

---

## Performance

- Zero JavaScript no critical path (Astro Islands)
- Fontes otimizadas com `display=swap`
- Imagens e assets servidos via CDN da Vercel
- Target: Nota 100 no PageSpeed Insights

---

## Conversão

- Botão flutuante de WhatsApp com animação de pulsação e label interativa
- Layout responsivo com menu mobile otimizado
- Call-to-action estratégicos em todas as páginas

---

## Scripts

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview
```

---

## Deploy

1. Conecte o repositório à Vercel
2. Configure o domínio final em `src/data/config.ts`
3. O deploy é automático a cada push na branch principal

---

## Estrutura de Pastas

```
├── public/           # Assets estáticos (favicon, OG image)
├── src/
│   ├── components/   # Componentes Astro reutilizáveis
│   ├── content/      # Coleções de conteúdo (blog, brinquedos)
│   ├── data/         # Central de configurações
│   ├── layouts/      # Layouts base
│   └── pages/        # Rotas do site
├── astro.config.mjs  # Configuração do Astro + Vercel
└── tailwind.config.mjs # Configuração do Tailwind
```

---

## Licença

Projeto proprietário. Todos os direitos reservados.
