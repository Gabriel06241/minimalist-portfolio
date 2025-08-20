import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    root: './',
    output: 'static',
    outDir: './docs',
    site: 'https://gabriel06241.github.io',
    base: '/minimalist-portfolio',
    build: {
      assets: 'astro'
    },
    i18n: {
      defaultLocale: "es",
      locales: ["es", "en"],
    },
  });