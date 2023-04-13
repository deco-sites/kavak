/** @type {import('$fresh/plugins/twind').Options} */
export default {
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
        primary: "#3374DB",
        "primary-dark": "#000000",
        "primary-light": "#FFFFFF",
        transparent: "transparent",
      },
      fontFamily: {
        body: ["Vazirmatn", "sans-serif"],
        title: ["Noka", "serif"],
      },
    },
  },
};
