/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#595B83',
        'secondary': '#333456',
        'bg': '#060930',
        'text': '#F4ABC4',

      }
    },
  },
  plugins: [],
}

