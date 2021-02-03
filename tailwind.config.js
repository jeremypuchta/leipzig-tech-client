/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable-next-line import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.tsx', 'pages/**/*.tsx'],
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      height: {
        content: 'calc(100vh - 64px - 88px)',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
