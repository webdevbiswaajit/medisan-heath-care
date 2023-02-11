/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "doctor.html", "notices.html"],
  theme: {
    fontFamily: {
      Titillium: "Titillium Web, sans-serif",
    },
    extend: {
      colors: {
        "Brand-green": "#0C5129",
        "Brand-Jacarta": "#402E5D",
        "Brand-Pigment": "#EE1A21",
        "Raisin-Black": "#202020",
        "Dark-Cyan": "#008894",
        "light-Ash": "#637385",
        "ash-dark": "#949FAA",
        "Pure-ash": "#ddd",
      },
    },
  },
  plugins: [],
};
