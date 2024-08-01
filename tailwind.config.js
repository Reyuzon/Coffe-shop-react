/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(252,76,12)",
        secondary: "rgba(246,128,60,255)",
        accent: "rgb(252,220,212)",
        black: "#282A3A",
        grey: "#D9D9D9",
        "bright-grey": "#F6F6F6",
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
        "playfair-display-fc": ["Playfair Display SC", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
