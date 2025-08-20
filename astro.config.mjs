import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    root: './',
    output: 'static',
    outDir: './docs',
    build: {
      assets: 'astro'
    },
    i18n: {
      defaultLocale: "es",
      locales: ["es", "en"],
    },
  });