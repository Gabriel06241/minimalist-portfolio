import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    site: `https://www.christophermarkus.com`,
    output: 'static',
    outDir: './docs',
    build: {
      assets: 'astro'
    }
  });