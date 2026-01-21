import path from 'path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@sean/ui': path.resolve(__dirname, '../ui/src'),
        '@sean/ui/*': path.resolve(__dirname, '../ui/src/*'),
        // '@sean/ui-dist': path.resolve(__dirname, '../ui/dist'),
      },
    },
  }
})
