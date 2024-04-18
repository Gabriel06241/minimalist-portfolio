import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    site: `https://gabriel06241.github.io`,
    output: 'static',
    outDir: './docs',
    // base: 'minimalist-portfolio-json',
    build: {
      assets: 'astro'
    }
  });