/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	plugins: [
		require( 'tailwindcss' ),
		require( 'autoprefixer' ),
	]
}
