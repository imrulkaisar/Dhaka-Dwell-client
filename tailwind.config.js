/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ed9b2c",
        primaryShadow: "#c7b39a",
        secondary: "#4c4c4c",
        bgGray: "#f2f2f2",
        dark: "201709",
      },
      fontFamily: {
        display: "'Exo 2', sans-serif",
        primary: "'Cinzel', serif",
        secondary: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
