/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#ffae00",
        secondary: "#f6f6f6",
        majorblack: "#000000",
        majorwhite: "#ffffff",
      },
      backgroundImage: {
        header_1: "url('./assets/header.png')",
        header_2: "url('./assets/aboutus.png')",
        header_3: "url('./assets/application.png')",
        header_4: "url('./assets/parking.png')",
        header_5: "url('./assets/contact.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};
