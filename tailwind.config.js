/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#fef0c7',
          200: '#fde08a',
          300: '#fbd24d',
          400: '#f9c31f',
          500: '#eab308',
          600: '#ca9a06',
          700: '#a27c05',
          800: '#856404',
          900: '#6e5104',
        },
        purple: {
          50: '#f7f5fb',
          100: '#ede9f6',
          200: '#ded6ef',
          300: '#c5b7e3',
          400: '#a68fd3',
          500: '#8c6bc4',
          600: '#7650b0',
          700: '#614092',
          800: '#4e3375',
          900: '#2d1d45',
          950: '#1a1126',
        }
      }
    },
  },
  plugins: [],
};