import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ["61b11a09-a2a3-4232-b5cb-d382a2a5cf1e-00-ja5bjht5hjlq.pike.replit.dev"]
  }
})
