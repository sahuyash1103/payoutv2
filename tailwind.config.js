/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowcard: '0px 2px 6px 0px rgba(26, 24, 30, 0.04)'
      }
    },
  },
  plugins: [],
}

