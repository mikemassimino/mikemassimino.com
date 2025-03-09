// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikemassimino.com',
  integrations: [tailwind()],
  redirects: {
    '/2funnyastronauts': {
      status: 301,
      destination: '/media',
    },
    '/about-this-site': {
      status: 301,
      destination: '/',
    },
    '/about': {
      status: 301,
      destination: '/biography',
    },
    '/in-space': {
      status: 301,
      destination: '/photos',
    },
    '/speaker': {
      status: 301,
      destination: '/speaking',
    }
  }
});