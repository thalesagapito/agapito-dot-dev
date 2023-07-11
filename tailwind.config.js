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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
