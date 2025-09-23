/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'studio-black': '#000000',
        'studio-white': '#ffffff',
        'studio-grey': '#3b3b3b',
        'studio-light-grey': '#8c8c8c',
        'studio-dark-grey': '#1a1a1a',
        'studio-button': '#242323',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': ['8vw', { lineHeight: '0.9' }],
        'hero-desktop': ['5vw', { lineHeight: '0.9' }],
        'hero-xl': ['4rem', { lineHeight: '0.9' }],
      },
      spacing: {
        'studio-sm': '1rem',
        'studio-md': '2rem',
        'studio-lg': '4rem',
        'studio-xl': '6rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
