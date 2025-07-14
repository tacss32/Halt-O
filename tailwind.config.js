/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/js/**/*.js"],
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",

  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-30%)" },
        }
      },

      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
        slideUp: "slideUp 0.3s ease-out forwards",
        scrollLeft: "scrollLeft 15s linear infinite",
        scrollRight: "scrollRight 20s linear infinite",
      },

      colors: {
        primary: "#ffae00",
        secondary: "#f6f6f6",
      },
    },
  },
};
