import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://farouk-blog.vercel.app/blog',

	integrations: [tailwind(), prefetch(), robotsTxt()],
});
