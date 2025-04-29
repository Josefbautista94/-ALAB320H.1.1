import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 This fixes React Router reload issues
    historyApiFallback: true,
  },
})