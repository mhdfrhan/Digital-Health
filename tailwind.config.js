const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"*.html",
		'public/preline/dist/*.js',
	],
  theme: {
    extend: {
			fontFamily: {
				satoshi: ["Satoshi", , ...defaultTheme.fontFamily.sans],
				generalSans: ["General Sans", , ...defaultTheme.fontFamily.sans],
			}
		},
  },
	darkMode: 'false',
  plugins: [
		require('@tailwindcss/forms'),
		require('preline/plugin'),
	],
}

