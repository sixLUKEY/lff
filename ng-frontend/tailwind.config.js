/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
      colors: {
        primary: "#FF992C",
        alternate: "#62D343",
      },
    },
  },
  plugins: [],
};
