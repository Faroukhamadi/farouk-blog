import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), prefetch()],

	// reset when you deploy to production
	output: 'server',
	adapter: netlify(),
});
