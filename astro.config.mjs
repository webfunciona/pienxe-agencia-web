// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Configuración base — minimal por diseño.
// Cualquier integración adicional (image, mdx, db) se añade solo si una SPEC la justifica.
export default defineConfig({
  site: 'https://pienxe.com',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: false, // Importamos global.css manualmente para controlar el orden
    }),
    sitemap(),
  ],
  vite: {
    server: {
      allowedHosts: ['blue-insects-play.loca.lt', 'loca.lt'],
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
