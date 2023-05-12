/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["ligth"],
  },
};
