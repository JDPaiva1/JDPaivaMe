/* eslint-env node */
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      primary: '#f05a28',
      secondary: '#f7931e',
      divider: '#F6F8FA',
      'grey-100': '#D7D7D7',
      'grey-500': 'rgba(255,255,255,0.5)',
      'grey-900': '#373737',
    },
    extend: {
      content: {
        empty: '""',
      },
      transitionDuration: {
        400: '400ms',
      },
      spacing: {
        'sp-1': '1px',
      },
    },
  },
  plugins: [],
}
