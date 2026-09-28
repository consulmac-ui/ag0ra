import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ag0ra.pages.dev',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
