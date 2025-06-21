/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        secondary: "#121212",
        accent: "#FF4081",
      },
      fontFamily: {
        hand: ['var(--font-edu)', 'cursive'],
        ovo: ['var(--font-ovo)', 'serif'], // 👈 Add this line
      },
    },
  },
  plugins: [],
};