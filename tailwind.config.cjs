/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1e3a8a",
        "secondary": "#ffffff",
        "danger": "#e3342f",
      },
    },
  },
  plugins: [],
}