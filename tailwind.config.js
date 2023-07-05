/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      'md': '800px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 5px 10px 5px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
