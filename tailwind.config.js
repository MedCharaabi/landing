/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        cBlue: "#1C7EB7",
        cGray: "#A0A0A0",
      },
      height: {
        "750": "46.875rem",
      }
    },
  },
  plugins: [],
}
