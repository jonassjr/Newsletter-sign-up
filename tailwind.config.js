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
      },

      boxShadow: {
        'custom-shadow':'0px 0px 15px 4px rgba(0, 0, 0, 0.15)'
      }

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
  
    },
    screens: {
      xs:'320px',
      md:'1024px'
    }
  },
  plugins: [],
}

