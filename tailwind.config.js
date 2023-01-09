/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'mainColor': '#182948',
      'secondaryColor': '#1ab998',
      'textColor': '#c2c2cb',
      'mainAccent': '#85b9da',
      'accentTwo': '#deebf3',
    },
    extend: {},
  },
  plugins: [],
}
