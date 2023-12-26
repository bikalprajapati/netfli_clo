/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whiteColor': '#ffffff',
        'blackColor': '#FFFF00',
        'greyColor': '#555555',
      }
    },
  },
  plugins: [],
}

