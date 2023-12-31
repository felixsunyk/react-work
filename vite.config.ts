/// <reference types ="vitest"/>
/// <reference types="vite/clent" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment:'jsdom',
    exclude :['node-modules']
  },
})
