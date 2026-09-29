import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mariafoelsener.com',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
