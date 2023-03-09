/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins":["Poppins", "sans-serif"],
        "body":["Lato","sans-serif"]
      },
      backgroundImage:{
        "main":"url('/src/assets/oriental.png')"
      },
      screens: {
        "sm-0":"480px",
        "sm": '570px',
        "md": '768px',
        "md-2":'900px',
        "lg": '996px',
        "lg-2":'1200px',
        "xl": '1440px',
        "2xl":"1920px",
        "lt":{'raw':'(max-width: 1200px),(max-height: 750px)'},
    },
    colors: {
      "title":"#282d35",
      "react": "#908a83",
      "dark" : "#21222A",
      "light":"#f5f7f2",
      "body":"#3b4f4f"
    },
    boxShadow:{
      "card":"0 5px 15px rgba(0,0,0,0.35)"
    }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
