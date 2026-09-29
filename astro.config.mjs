import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mariafoelsener.com',
  outDir: './site',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
