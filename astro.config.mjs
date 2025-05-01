// @ts-check
import svgLoader from 'vite-svg-loader'
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      svgLoader(),
      tailwindcss(),
    ],
  },

  integrations: [
    sitemap(),
    partytown(),
    vue({appEntrypoint: '/src/pages/_app'}),
  ],
});
