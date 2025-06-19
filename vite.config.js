import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AI-Tools/', // Set the base path for deployment
  build: {
    outDir: 'docs', // Specify the output directory as 'docs'
  },
})
