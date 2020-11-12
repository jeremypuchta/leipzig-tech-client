/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable-next-line import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {},
  plugins: [],
}
