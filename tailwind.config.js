const withAnimations = require('animated-tailwindcss');
module.exports = withAnimations({
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["'Montserrat'"],
            mono: ["'Inconsolata'"]
        }
    },
    plugins: [],
});
