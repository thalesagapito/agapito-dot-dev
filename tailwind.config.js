/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      container: {
        center: true,
        padding: {
          'DEFAULT': '1rem',
          'sm': '2rem',
          'lg': '3rem',
          'xl': '4rem',
          '2xl': '5rem',
        },
      },
      typography: theme => ({
        orange: {
          css: {
            '--tw-prose-links': theme.colors.orange[700],
            '--tw-prose-invert-links': theme.colors.orange[500],
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
