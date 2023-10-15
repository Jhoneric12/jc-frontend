
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary-green': '#4FBD5E',
      'secondary-green': '#C7F2A4',
      'font-color': '#232323',
      'puti': '#F5FAF0',
      'ulra-puti': '#FFFFFF',
      'semi-black': '#5B5B5B'
    },
    fontSize: {
      'xLarge': '3rem',
      'large': '2rem',
      'medium': '1.5rem',
      'small': '1.25rem',
      'xSmall': '1rem',
      'xxSmall': '0.875rem',
      'superSmall': '0.75rem'
    },
    extend: {},
  },
  plugins: [],
});


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     colors: {
//       'primary-green': '#4FBD5E',
//       'secondary-green': '#C7F2A4',
//       'font-color': '#232323',
//       'puti': '#F5FAF0',
//       'ulra-puti': '#FFFFFF'
//     },
//     fontSize: {
//       'xLarge': '3rem',
//       'large': '2rem',
//       'medium': '1.5rem',
//       'small': '1.25rem',
//       'xSmall': '1rem',
//       'xxSmall': '0.875rem',
//       'superSmall': '0.75rem'
//     },
//     extend: {},
//   },
//   plugins: [],
// }