/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container: {
        center: "true",
        padding: {
          DEFAULT: "3rem",
          sm: "3rem",
          md: "2rem",
          lg: "5rem",
        },
      },
    },
  },
  plugins: [],
};
