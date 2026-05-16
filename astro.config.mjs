import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { SITE_CONFIG } from './src/data/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: SITE_CONFIG.url,
  integrations: [
    tailwind(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
