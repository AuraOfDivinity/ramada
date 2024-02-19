/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        xs: "400px",
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
        primary: "Cormorant Garmond",
        secondary: "Open Sans",
      },
    },
  },
  plugins: [],
};
