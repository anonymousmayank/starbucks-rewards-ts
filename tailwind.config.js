const colors=require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:{
        100:'#F1F8F5',
        200:'#D4E9E2',
        300:'#008248',
        400:'#1E3932'
      },
      secondry:'#f3f1e7',
      gray:colors.gray,
      white:colors.white,
      black:colors.black,
      red:colors.red,
      accent:'#cba258',
      warning:'#f15e5e',
    },
    extend: {
      padding:{
        '4/3':'133%'
      },
      height:{
        '2xl':'36rem',
        '3xl':'40rem'
      },
      inset:{
        '5.25':'5.25rem',
        '6.25':'6.25rem',
        '68':'17rem'
      },
      backgroundImage: theme => ({
        'star': "url('images/star.png')",
        'star-mobile':"url('images/mobile-star.webp')"
       }),
       backgroundPosition: {
        '1/2':'50%',
       },
       boxShadow: {
         t:'0px -3px 6px -3px rgb(0 0 0 / 25%)',
         '2xl':'0 0 20px rgb(0 0 0 / 25%)',
         inner: 'inset 0 -6px 0px 0 rgb(0, 130, 72)'
       },
       borderWidth: {
         '10':'10px',
         '6':'6px'
       },
       borderRadius:{
         '3':'0.1875rem'
       },
       transitionProperty: {
        'border': 'border-width, margin',
       }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      margin: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
