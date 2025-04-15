// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
    ],}
