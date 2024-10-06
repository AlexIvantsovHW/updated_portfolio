module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textShadow: {
        '3d': '2px 2px 0 #000, 4px 4px 0 #555',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-3d': {
          textShadow: '1px 1px 5px #0000, 4px 4px 4px #5555',
        },
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '0.5px white',
        },
      })
    },
  ],
}
