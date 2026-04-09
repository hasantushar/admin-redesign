/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5ee',
          100: '#ffe8d6',
          200: '#ffceab',
          300: '#ffab75',
          400: '#ff823d',
          500: '#ee6a1f',
          600: '#d65413',
          700: '#b04112',
          800: '#8c3514',
          900: '#732e14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 0 rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 6px -1px rgb(0 0 0 / 0.06)',
      },
    },
  },
  plugins: [],
};
