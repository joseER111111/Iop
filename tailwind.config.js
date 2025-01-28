module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js", // Agrega esta línea
    "./src/**/*.{html,js,php,css}",    // Ajusta el path según tu estructura de proyecto
    "./includ/**/*.{php,html,css}",    // Ajusta el path según tu estructura de proyecto
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Agrega el plugin de Flowbite
  ],
}