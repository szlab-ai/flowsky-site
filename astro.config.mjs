import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://szlab-ai.github.io',
  base: '/flowsky-site/',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'zh', 'ja'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },
  integrations: [
    sitemap({
      // Keep language alternates consistent with the page head.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-Hans', ja: 'ja' },
      },
      // Exclude the root redirect and 404 from the sitemap.
      filter: (page) =>
        !/\/flowsky-site\/$/.test(page) && !/\/404\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
