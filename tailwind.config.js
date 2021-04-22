module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Royalacid'],
        graf: ['WildBasic'],
        dec: ['AgiesFresh']
      },
      backgroundSize: {
       '50%': '50%',
       '60%': '60%',
       '70%': '70%',
       '80%': '80%',
       '90%': '90%',
       '100%':'100%'
      }
    },
    screens: {
      'xs': '360px',
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
