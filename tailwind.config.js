/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
       Montserrat: ["Montserrat", "san-serif"],
       Roboto: ["Roboto", "sans-serif"],
       bebasNeue: ["Bebas Neue", "sans-serif"] 
      },
      colors: {
        'orange': '#e8762c',
        'lightOrange': '#ff9652',
        'white': '#fff',
        'gray': '#777',
        'lightGray': '#d7d7d7',
        'bgWhite': '#f6f6f6',
      },
      dropShadow: {
        'orange': '0 35px 35px rgb(232 118 44)',
        'blue': '0 1px 20px rgba(63, 0, 255, 0.25)',
      },
    extend: {
    },
  },
  plugins: [],
}