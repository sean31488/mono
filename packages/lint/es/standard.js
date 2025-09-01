import js from '@eslint/js'
import globals from 'globals'
import neostandard from 'neostandard'

export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  neostandard()
]
