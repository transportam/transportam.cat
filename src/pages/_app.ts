import type { App } from 'vue';
import Vue3Marquee from 'vue3-marquee'
import { motionPlugin } from '@oku-ui/motion'

export default (app: App) => {
  app.use(motionPlugin);
  app.use(Vue3Marquee);
};
