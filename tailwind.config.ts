/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        red: {
          primary: "#D11242",
        },
        gray: {
          primary: "#848484",
          secondary: "#585858",
        },
        black: {
          primary: "#000000",
        },
      },
      screens: {
        xs: "380px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      fontFamily: {
        primary: "GaramondPro",
        secondary: "Open Sans",
      },
      backgroundImage: {
        "about-us": "url('/aboutus.jpeg')",
      },
    },
  },
  plugins: [],
};
