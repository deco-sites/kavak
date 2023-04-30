/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        primary: "#3374DB",
        "primary-dark": "#000000",
        "primary-light": "#FFFFFF",
        "base-light": "#333333",
        "base-lighter": "#5b5b5b",
        transparent: "transparent",
      },
      fontFamily: {
        body: ["Vazirmatn", "sans-serif"],
        title: ["Noka", "serif"],
      },
    },
  },
  plugins: {
    "shadow-item": {
      "box-shadow":
        "0 0.063rem 0.313rem 0 rgba(70,70,70,.15), 0 0.125rem 0.125rem 0 rgba(70,70,70,.15), 0 0.188rem 0.125rem -0.125rem rgba(70,70,70,.15)",
    },
    "line-clamp": ([mod]: string[]) => ({
      "overflow": "hidden",
      "display": "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": mod,
    }),
  },
};
