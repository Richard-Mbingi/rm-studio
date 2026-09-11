import { defineConfig } from 'astro/config';

// Static output — no adapter needed. `astro build` produces a plain
// HTML/CSS/JS folder in `dist/` that any static host (including
// Hostinger's shared hosting) can serve as-is.
export default defineConfig({
  site: 'https://rmstudxo.com',
});
