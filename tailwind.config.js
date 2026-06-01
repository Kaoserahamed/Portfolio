/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // indigo-600 - more professional
        secondary: '#0369a1', // sky-700 - deeper blue
      },
    },
  },
  plugins: [],
}
