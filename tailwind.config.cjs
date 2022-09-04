/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A192F',
        'secondary': '#3C978D',
        'mainTxt': '#8892B0',
        'accent': '#CCD6F6'
      }
    },
  },
  plugins: [],
}
