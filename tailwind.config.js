/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'blacks': ['Archivo Black', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'Oswald': ['Oswald', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],

        // Puedes agregar otras fuentes aquí si es necesario
      },
      colors: {
        'whiteshadow': 'rgb(207 19 19 / 58%)',
        'verdeclaro': '#5EAC24',
        'azulprueba': '#0054ff',
        'verdeprueba': '#13c636',
        'verdehover': '#13b533',
        'azulv2': '#050055', 
      },
      screens: {
        'tabletv2': '835px',  // Breakpoint personalizado para pantallas de 1440px
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
