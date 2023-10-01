/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"g-t-c-2": "3rem auto",
			},
			gridTemplateRows: {
				"g-t-r-3": "2rem auto 1.5rem",
				auto: "auto",
			},
		},
	},
	plugins: [],
};
