/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      gridTemplateColumns: {
        "carousel": "48px 1fr 48px",
      },
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
        "base-gray": "#e9e9e9",
        "gray": "#c7c7c7",
        transparent: "transparent",
      },
      fontFamily: {
        body: ["Vazirmatn", "sans-serif"],
        title: ["Noka", "serif"],
      },
    },
  },
  plugins: {
    "flex-value": ([mod]: string[]) => ({
      "flex": mod.replace(/(^\[)|(\])$/g, "").replace(/_/g, " "),
    }),
    "border-t-primary": {
      "border-top-color": "#3374DB",
    },
    "shadow-base": {
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
