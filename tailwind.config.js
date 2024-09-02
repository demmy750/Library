/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', 
        'xxs': '240px', 
        'xxl': '1330px',
      },
    },
  },
  plugins: [],
}

