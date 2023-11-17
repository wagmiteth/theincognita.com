/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}'
],

  theme: {
    colors:{
      black: '#030303',
      green: '#10a267',
      yellow: '#fec901',
      teal: '#009292',
      purple: '#b287fd',
      background: '#ffdca8',
      white: '#ffffff',
      hoverGray: '#d3cfcf', // Note: Use quotes for custom property names with hyphens
    },
    extend: {
      boxShadow: {
        custom: '2px 2px 0px 0px black',
        custom2: '4px 4px 0px 0px black',
        hover: '0px 0px 0px 0px black',
      }
      
    },
  },
  plugins: [],
}

