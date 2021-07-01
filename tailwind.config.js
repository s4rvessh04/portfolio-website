module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      fontWeight: {
        black: 900,
      },
      boxShadow: {
        hoverShadow: '0px 7px 29px rgba(100, 100, 111, 0.2)',
      },
      dropShadow: {
        soft: 'drop-shadow(1px 3px 4px rgba(238, 238, 238, 0.8))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
