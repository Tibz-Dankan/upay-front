/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        // primary: "#7950f2",
        // "primary-dark": "#5f3dc4",
        // "primary-light": "#b197fc",
        // secondary: "#4c6ef5",
        // "secondary-light": "#91a7ff",
        // "secondary-dark": "#364fc7",
        "gray-light-1": "#f3f4f6",
        "gray-light-2": "#e5e7eb",
        "gray-light-3": "#d1d5db",
        "gray-light-4": "#9ca3af",
        "gray-dark-1": "#4b5563",
        "gray-dark-2": "#374151",
        "gray-dark-3": "#1f2937",
        "gray-dark-4": "#111827",
        "gray-opacity": "rgba(0, 0, 0, 0.15)",
        info: " #5BC0DE",
        warning: "#F0AD4E",
        error: "#D9534F",
        success: "#55C57A",
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out forwards",
        slideDownDropDown: "slideDownDropDown 0.3s ease-out",
        moveInRight: "moveInRight 0.35s ease-out",
        rotate: "rotate 0.8s linear infinite",
        sidebarMoveInLeft: "sidebarMoveInLeft 0.3s ease-out",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-300px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        moveInRight: {
          "0%": { opacity: "0", transform: "translateX(300px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        sidebarMoveInLeft: {
          "0%": { opacity: "0", left: "-256px" },
          "100%": { opacity: "1", left: "0px" },
        },
        slideDownDropDown: {
          "0%": { opacity: "0", transform: "translateY(-48px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
});
