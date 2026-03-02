/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'accent-color': '#00f2ea',
                'accent-glow': 'rgba(0, 242, 234, 0.4)',
            },
            fontFamily: {
                main: ['Outfit', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
