import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        embed: 'data.html',
        report: 'apps.html'
      }
    }
  },
  plugins: [svelte()],
})
