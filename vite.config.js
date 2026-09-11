import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expone el servidor en 0.0.0.0 (red local y puertos accesibles)
    port: 5173,
  },
})
