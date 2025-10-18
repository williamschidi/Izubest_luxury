/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Raleway", "Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        calligraphy: ["Cursive", "Great Vibes"],
      },
      screens: {
        mlg: "900px",
        xs: "450px",
      },
    },
  },
  plugins: [],
};
