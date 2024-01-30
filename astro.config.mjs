import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://music.maxdemaio.com',
  integrations: [UnoCSS({
    injectReset: true
  }), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    }
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});