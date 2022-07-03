/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        green: '#118024',
        white: '#F6FBF2',
        brownish: '#EAE8DF',
      },
      fontFamily: ['Poppins'],
    },
  },
  plugins: [],
};
