/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#F9F9F8',
        charcoal: '#2A2A2A',
        amber: '#D97736'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
