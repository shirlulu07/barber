/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      crimson: ['Crimson-Text', 'sans-serif'],
    },
    extend: {
      height: {
        '128': '32rem',
      },

      backgroundImage: {
        'bg-1': "url('/src/image/2.png')",
        'bg-2': "url('/src/image/3.png')",
        'bg-3': "url('/src/image/4.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
