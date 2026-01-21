/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    require('../lint/tw/v3.js')
  ],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
