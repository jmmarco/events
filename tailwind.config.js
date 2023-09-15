/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        alert: '#FFF4F4',
        'circle-blue': '#506CF0',
        primary: '#1C2226',
        secondary: '#E6E8EC',
        grey: {
          light: '#E3E5E9',
          medium: '#F4F4F7',
          dark: '#F7F9FB',
        },
      },
      borderColor: {
        alert: '#DC462A',
        primary: '#8A94A6',
        secondary: '#E6E8EC',
      },
      colors: {
        alert: '#D72C0D',
        primary: '#8A94A6',
        secondary: '#404F5E',
        grey: {
          shade: {
            dark: '#1D2839',
            medium: '#687387',
            light: '#8594AA',
            placeholder: '#8D9CAE',
          },
        },
      },
    },
  },
  plugins: [],
}
