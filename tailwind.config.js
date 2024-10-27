/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['"Rubik", sans-serif",'],
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '5px',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}