/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    screens: {
      tab: "768px",
      desktop: "1024px",
    },

    extend: {},
  },
  plugins: [],
};
