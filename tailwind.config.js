/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'primary':'#FFF7F7',
        'secondary':'#27DEBF',
        'third-color':'#DADADA',
        'background-color': '#204969'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
  
    },
    screens: {
      xs:'320px'
    }
  },
  plugins: [],
}

