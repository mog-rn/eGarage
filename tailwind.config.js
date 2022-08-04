/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./modules/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#118024",
        secondary: "#F6FBF2",
        grey: "#6B6B6B"
      },
    },
  },
  plugins: [],
};
