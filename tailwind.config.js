/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        circle: {
          alert: '#FFF4F4',
          blue: '#506CF0',
          primary: '#1C2226',
          secondary: '#E6E8EC',
          grey: {
            light: '#E3E5E9',
            medium: '#F4F4F7',
          },
        },
      },
      borderColor: {
        circle: {
          alert: '#DC462A',
          primary: '#8A94A6',
        },
      },
      colors: {
        circle: {
          alert: '#D72C0D',
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
  },
  plugins: [],
}
