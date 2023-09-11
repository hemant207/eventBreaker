import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  css:{
    modules:true,
  },
  plugins: [react()],
})
