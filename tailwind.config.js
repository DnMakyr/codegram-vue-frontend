/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  blocklist: [
    'container',
  ],
  prefix: 'tw-',
  plugins: [],
}