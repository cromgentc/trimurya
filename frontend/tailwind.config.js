/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#061d5c',
        secondary: '#f2b218',
        accent: '#ff7a12',
        slate: {
          950: '#020c2e'
        },
        surface: '#F8FAFC'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 80px rgba(15, 23, 42, 0.14)'
      }
    }
  },
  plugins: []
};
