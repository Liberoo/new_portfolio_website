// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    backgroundPosition: {
      poy: '30% 15%',
      pox: '15% 15%',
      poq: '0% 30%',
      poy2xl: '50% 15%',
    },

    boxShadow: {
      myshadow: '0px 12px 19px 2px rgb(0 0 0 / 58%)',
    },
    colors: {
      myGreen: '#42DFB0',
      myPurple: '#E161FF',
      myDark: '#202124',
      white: '#ffffff',
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      grey: colors.coolGray,
    },
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
      consoleFont: ['Inconsolata', 'monospace'],
    },

    extend: {},
  },
};
