/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./_drafts/**/*.html',
		'./_includes/**/*.html',
		'./_layouts/**/*.html',
		'./_posts/*.md',
		'./*.md',
		'./*.markdown',
		'./*.html',
	],
	theme: {
		container: {
			padding: '2rem',
		},
		extend: {
			screens: {
				xl: '1218px',
				'2xl': '1218px',
			},
		},
	},
	plugins: [],
};
