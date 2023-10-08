/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'screen-75': '75vh',
        'bg-semi-75': 'rgba(0, 0, 0, 0.75)'
      }
    }
  },
  plugins: []
}
