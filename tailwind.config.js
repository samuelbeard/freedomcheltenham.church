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
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        serif: ["Aerokids", ...defaultTheme.fontFamily.serif],
        swish: ["Aerokids Swash", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "brand-red": "#e74242",
        "brand-dark-gray": "#3f3f3f",
        "brand-black": "#30343a",
        "brand-beige": "#f0f0e1",
        "brand-yellow": "#f5be55",
        "adventurers-green": "#15a65c",
        "ramblers-yellow": "#ffd150",
        "explorers-red": "#e83f3f",
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        "bounce-short": "bounce 1s ease-in-out 3.5",
      },
    },
  },
}
