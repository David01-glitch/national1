/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f1f7f2',
          100: '#dcedde',
          500: '#3f7d4a',
          600: '#2f6238',
          700: '#264e2d',
          900: '#152e1a',
        },
        mountain: {
          500: '#2e6f95',
          700: '#1f4e6b',
        },
        sunset: {
          400: '#f59e58',
          500: '#ea7a2c',
          600: '#cb5f17',
        },
        sand: {
          50: '#fbf7f1',
          100: '#f4ece0',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(20, 40, 25, 0.08)',
      },
    },
  },
  plugins: [],
};
