module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Quicksand'],
      roboto: ['Roboto'],
    },
    extend: {
      colors: {
        'xw': {
          '100': '#faf9f8',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      },
      spacing: {
        '1/1': '100%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-100%, 0, 0)' },
        }
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    visibility: ['responsive', 'hover', 'focus'],
    animation: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  corePlugins: {
    animation: true,
  }
}
