// @ts-check
import svgLoader from 'vite-svg-loader'
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import vue from '@astrojs/vue';
import sentry from "@sentry/astro";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),

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
    sentry({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      sourceMapsUploadOptions: {
        project: "website",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
