import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['normalize']
    }
  },
  integrations: [svelte(), react(), image()]
});