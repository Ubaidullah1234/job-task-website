/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["'Avenir Next'", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
