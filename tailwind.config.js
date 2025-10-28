// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = { // Use module.exports
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#008F3A', // Your bright green
        'dark-green': '#004201',  // Your darker green
        'bg-dark-green': '#142301',
        'dark-gray': '#0B0D0A',   // Your dark background
        'light-gray': '#D2D2D1',  // Your light text color
        'medium-gray': '#6B7280', // Using Tailwind's gray-500 for secondary text instead of black-gray
        // Removed 'black-gray': '#00000', assuming it was a typo or replaced by medium-gray
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};