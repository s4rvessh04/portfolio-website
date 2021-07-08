module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      fontWeight: {
        black: 900,
      },
      colors: {
        'lightBlue-50': '#F0F9FF',
        'lightBlue-100': '#E0F2FE',
        'lightBlue-300': '#7DD3FC',
        'lightBlue-500': '#0EA5E9',
      },
      height: {
        HeightHeroBox: '32.375rem',
      },
      width: {
        WidthHeroBox: '27rem',
      },
      boxShadow: {
        hoverShadow: '0px 7px 29px rgba(100, 100, 111, 0.2)',
        soft: '0px 8px 24px rgba(149, 157, 165, 0.1)',
      },
      dropShadow: {
        soft: '1px 3px 4px rgba(238, 238, 238, 0.8)',
      },
      lineHeight: {
        '45px': '2.813rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      borderWidth: ['dark'],
    },
  },
  plugins: [],
};
