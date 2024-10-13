/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ['*'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #4203a9, #90bafc)',
      },
      fontFamily : {
        Bangla: 'Bangla'
      }
    },
  },
  plugins: [],
})

