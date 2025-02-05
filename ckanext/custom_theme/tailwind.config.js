/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
          'primary-color': '#F4F6FF',
          'secondary-color': '#F3C623',
          'accent-01': '#EB8317',
          'accent-02': '#10375C',
      },
    },
  }
}

