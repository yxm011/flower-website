/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#ec4899',
        'pink-light': '#fce7f3',
        'pink-dark': '#be185d',
      },
    },
  },
  plugins: [],
}
