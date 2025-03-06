// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jakebox.github.io/',
  base: 'mikemassimino.com',
  integrations: [tailwind()]
});