import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	vite: {
		ssr: {
			noExternal: ['normalize'],
		},
	},
	integrations: [svelte(), react()],
});
