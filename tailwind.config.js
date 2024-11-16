module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        neodgm: ['neodgm', 'sans-serif'],
      },
      colors: {
        main01: '#77212E',  
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
