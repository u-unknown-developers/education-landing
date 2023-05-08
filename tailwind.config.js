/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '1023px' },
      mid: { max: '880px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#00B4D8',
      secondary: '#ef476f',
      black: {
        DEFAULT: '#262424',
        100: '#231C1C',
        200: '#1B1111',
        300: '#0F0A0A',
      },
      gray: {
        DEFAULT: '#878787',
        100: '#E3E3E3',
        200: '#CFCFCF',
        300: '#BEBEBE',
      },
      white: '#ffffff',
    },

    extend: {
      fontSize: {
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.5rem',
        '7xl': '4rem',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: [],
};
