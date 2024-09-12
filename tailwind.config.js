/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Lato": ["Lato, system-ui"],
        "Josefin": ["Josefin Sans, sans-serif"],
      },
      colors:{
        "violet": '#7E33E0',
        "pink": "#FB2E86",
        "SkyBlue":"#F1F0FF",
        "PantonePurple": "#F5E1FC",
        "text": "#151875",
        "lightBlue": "#F6F5FF",
        "subtitle":"#8A8FB9",
        "skygreen":"#19D16F"

      }
    },
  },
  plugins: [],
}

