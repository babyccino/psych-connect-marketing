/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{html,ts,md}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // add this line
  ],
};
