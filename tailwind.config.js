/** @type {import('tailwindcss').Config} */

const circle = {
  alert: {
    text: '#D72C0D',
    border: '#DC462A',
    background: 'FFF4F4',
  },
  blue: {
    900: '#506CF0',
    800: '#5f7cf3',
    700: '#6f8cf6',
    600: '#7f9bf8',
    500: '#91aafa',
    400: '#a2b8fc',
    300: '#b4c7fe',
    200: '#c6d5ff',
    100: '#d9e3ff',
    50: '#ecf1ff',
  },
  grey: {
    background: '#F7F9FB',
    shade: {
      dark: '#1D2839',
      medium: '#687387',
      light: '#8594AA',
    },
  },
  placeholder: '#8D9CAE',
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        circle,
        primary: '#1C2226',
        secondary: '#E6E8EC',
      },
      borderColor: {
        circle,
        primary: '#8A94A6',
        secondary: '#E6E8EC',
      },
      colors: {
        primary: '#8A94A6',
        secondary: '#404F5E',
        circle,
      },
    },
    ringColor: {
      circle,
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
