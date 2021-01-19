// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      screens:{
        lg: '1280px',
        tiny: '460px'
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      textColor: {
        'primary': '#DAAE63',
        'second': '#684826',
        'black': '#343434'
      },

      backgroundColor: {
        'grey': '#E3E3E3',
        'primary': '#DAAE63'
      },
      fontFamily: {
        'nexa-thin': ['NexaThin'],
        'nexa-light': ['NexaLight'],
        'nexa-regular': ['NexaRegular'],
        'nexa-xbold': ['NexaXBold'],
        'caveat-bold': ['CaveatBold'],
        'caveat-regular': ['CaveatRegular']
      },
      borderColor: {
        'primary': '#BC8A35',
        'second': '#E3E3E3',
        'third': '#DAAE63'
      },
      borderWidth: {
        'large': '16px'
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
