/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffb681",
        secondary: "#fffaf7",
        textPrimary: "#343d48",
        textSecondary: "#928d8d",
        borderColor: "#ded1d1",
        buttonColor: "#ff992e",
      },
    },
  },
  plugins: [],
};
