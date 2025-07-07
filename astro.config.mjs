import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: "never",
  site: 'https://maymaxmusic.com',
  integrations: [UnoCSS({
    injectReset: true
  }), sitemap(), mdx(), react()],
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