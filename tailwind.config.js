/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      grey: '#373737',
      primary: '#f05a28',
      secondary: '#f7931e',
    },
    container: {
      center: true,
    },
    extend: {
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
