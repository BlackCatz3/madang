/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
