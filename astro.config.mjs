import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  // Set your website domain here for Canonical URL variables down the project
  site: 'https://thehorticulturecompany.com.au/',
  output: 'static', // or 'server', or 'hybrid'
  integrations: [tailwind(), compress(), partytown(), sitemap()]
});