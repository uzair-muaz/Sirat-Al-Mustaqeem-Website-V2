/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			xs: '400px',
			sm: '640px',
			md: '800px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				custom1: '#F9FFDE', //Lime Background Color
				custom2: '#13824B', // Main Green Color
				custom3: '#ADD99A', // Light Green Color
				custom4: '#0AB99D', // Sea Green Color
				custom5: '#046A38', // Navbar Text Color
				custom6: '#F2A900', //Yellow Color
				custom7: '#393939', // Grey Color Text For Lime Background
				custom8: '#69AA8A', //Form Submit Button
				// custom8: '#4E4E4ECC',
				// custom9: '#040921C2',

				custom9: '#1C2B26' // Footer Background Color
			}
		}
	},
	plugins: []
};
