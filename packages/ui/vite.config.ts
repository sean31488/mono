import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import prefixer from 'postcss-prefix-selector'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts(
      {
        copyDtsFiles: true,
        include: ['src/**/*'],
        // rollupTypes: true,
        // insertTypesEntry: true
      }
    )
  ],
  resolve: {
    alias: {},
  },
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/global-install.ts')
      ],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        prefixer({
          prefix: '.my-prefix',
          transform (prefix, selector, prefixedSelector, filePath, rule) {
            if (rule.parent.params === 'lib-tw-base') {
              return prefixedSelector
            }
            return selector
          }
        })
      ]
    }
  }
})
