/** @type {import('$fresh/plugins/twind').Options} */
export default {
  plugins: {
    "shadow": { "box-shadow": "0px 4px 24px -4px rgb(0 0 0 / 24%)" },
    "shadow-light": { "box-shadow": "0px 0px 14px rgb(0 0 0 / 8%)" },
    "shadow-hidden": { "box-shadow": "none" },
  },
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "black",
        "primary-light": "#242424",
        "secondary": "#FFD000",
        "secondary-light": "#FFE77E",
        transparent: "transparent",
        "white": "white",
        "gray": "#A3A3A3",
        "gray-dark": "#707070",
      },
      fontFamily: {
        sans: ["Archivo", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
