import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the production build also works when hosted on GitHub Pages (step 6)
export default defineConfig({
  base: './',
  plugins: [react()],
})
