/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cyan: {
          300: 'hsl(215, 51%, 70%)',
        },
        teal: {
          400: 'hsl(178, 100%, 50%)',
        },
        slate: {
          700: 'hsl(215, 32%, 27%)',
          800: 'hsl(216, 50%, 16%)',
          900: 'hsl(217, 54%, 11%)',
        },
      },
      animation: {
        'fade-up': 'fade-up 0.3s ease-out forwards',
        'fade-up-short': 'fade-up-short 0.3s ease-out forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0%', transform: 'translateY(5%)' },
          '100%': { opacity: '100%', transform: 'translateY(0)' },
        },
        'fade-up-short': {
          '0%': { opacity: '0%', transform: 'translateY(2%)' },
          '100%': { opacity: '100%', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
