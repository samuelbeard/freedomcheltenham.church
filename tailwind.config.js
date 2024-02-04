const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "8rem",
                xl: "10rem",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                serif: ["Cormorant Garamond", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                "brand-red": "#e74242",
                "brand-dark-gray": "#3f3f3f",
                "brand-black": "#30343a",
                "cubs-red": "#e62d33",
                "adventurers-yellow": "#edc019",
                "wave-blue": "#00b1fd",
            },
        },
    },
}
