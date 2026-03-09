// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Set your production domain here
  site: 'https://www.boulangerie-kura.jp',

  integrations: [
    tailwind({
      // We import global.css manually in BaseLayout, so disable
      // Astro's automatic base style injection to avoid duplicates.
      applyBaseStyles: false,
    }),
  ],
});
