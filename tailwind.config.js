/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  blocklist: [
    'container',
  ],
  theme: {
    fontFamily: {
      sans: ['Instagram Sans', 'sans-serif'],
    },
  },
  prefix: 'tw-',
  plugins: [],
}