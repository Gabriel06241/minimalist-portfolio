import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    site: `https://gabriel06241.github.io/minimalist-portfolio-json/`,
    output: 'static',
    outDir: './docs',
    // base: 'minimalist-portfolio-json',
    base: '/docs',
    build: {
      assets: 'astro'
    }
  });