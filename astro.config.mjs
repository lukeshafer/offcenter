import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import image from '@astrojs/image';

// https://astro.build/config
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), partytown()],
  output: 'server',
  adapter: netlify()
});