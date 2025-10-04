import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const base = import.meta.env.VITE_DEPLOY_ENV === "GH_PAGES" ? "/zustand-react/" : "/";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base
})
