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
        surface: {
          50: '#fafbfc',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
        },
        navy: {
          800: '#1e2235',
          850: '#191d2f',
          900: '#141725',
          950: '#0f1119',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'card-lg': '0 4px 16px -2px rgb(0 0 0 / 0.06), 0 2px 8px -2px rgb(0 0 0 / 0.04)',
        glow: '0 0 20px -3px rgb(238 106 31 / 0.3)',
        glass: '0 8px 32px 0 rgb(0 0 0 / 0.04)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
