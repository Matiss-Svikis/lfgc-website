module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f6edef',
          200: '#eedce1',
          300: '#e0c1c9',
          400: '#cd99a5',
          500: '#ba7a88',
          600: '#a45e69',
          700: '#8c4a53',
          800: '#744046',
          900: '#3d2326',
          // 100: '#d0f7ed',
          // 200: '#a1eedb',
          // 300: '#6adec6',
          // 400: '#47c9b2',
          // 500: '#22aa94',
          // 600: '#198878',
          // 700: '#186d62',
          // 800: '#185750',
          // 900: '#184943',
        },
        purple: {
          100: '#fbe8e8',
          200: '#f7d4d7',
          300: '#f0b1b6',
          400: '#e7858f',
          500: '#da596a',
          600: '#c9475e',
          700: '#a52b44',
          800: '#8a273e',
          900: '#77243a',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
