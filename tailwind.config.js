/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '112': '28rem',
        '175': '44rem',
      }
    },
    colors: {
      'cool-black': '#050D21',
      'lotion': '#FFFDFB',
      'blue-crayola': '#1A67F8',
      'periwinkle-crayola': '#C9D5EE',
      'lavender-floral': '#B46CF8',
    },
    fontFamily: {
      sans: 'Roboto, sans-serif',
    }
  },
  plugins: [],
}
