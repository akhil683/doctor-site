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
        'lightGray': '#999'
      },
      dropShadow: {
        'orange': '0 35px 35px rgb(232 118 44)',
      },
    extend: {
    },
  },
  plugins: [],
}