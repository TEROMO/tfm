import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') } },
  server: { host: '127.0.0.1', port: 8443 },
  build: {
    outDir: 'work/site-build', manifest: true,
    rollupOptions: { input: { site:path.resolve(import.meta.dirname, 'index.html'), admin:path.resolve(import.meta.dirname, 'src/admin/admin.js') } },
  },
})
