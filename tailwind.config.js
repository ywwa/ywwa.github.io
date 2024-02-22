/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter", system-ui, sans-serif'],
        nanum: ['"Nanum Pen Script", cursive'],
      },
      backgroundImage: {
        "squared-light": `
          radial-gradient(
            circle at center,
            rgba(0, 0, 0, 0.005) 0,
            rgba(0, 0, 0, 0.005) 1px,
            transparent 1px
          ),
          linear-gradient(
            to right,
            rgba(0, 0, 0, 0.02) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.02) 1px,
            transparent 1px
          )
        `,
        "squared-dark": `
          radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.005) 0,
            rgba(255, 255, 255, 0.005) 1px,
            transparent 1px
          ),
          linear-gradient(
            to right,
            rgba(255, 255, 255, 0.01) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.01) 1px,
            transparent 1px
          )
        `,
      },
    },
  },
  plugins: [require("tailwindcss-safe-area")],
};
