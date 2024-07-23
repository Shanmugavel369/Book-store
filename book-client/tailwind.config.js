/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        blueGreen: '#339999', // Example mixture of blue and green
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
