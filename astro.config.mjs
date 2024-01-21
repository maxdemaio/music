import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://music.maxdemaio.com',
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
