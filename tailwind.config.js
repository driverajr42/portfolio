/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#182744',
				secondary: '#1d8f87',
				accentOne: '#6c92b9',
				accentTwo: '#8b8ea1',
			},
			screens: {
				xs: '500px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1600px',
			},
		},
	},
	plugins: [],
};
