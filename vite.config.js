import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio",
  plugins: [react()],
  server: {
    host: true, // Permitir acceso en la red local
    port: 5173, // Puerto del servidor de desarrollo
  },
})
