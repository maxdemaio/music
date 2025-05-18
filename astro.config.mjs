import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: "never",
  site: 'https://music.maxdemaio.com',
  integrations: [UnoCSS({
    injectReset: true
  }), sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    }
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});