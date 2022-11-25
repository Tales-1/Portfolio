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
      screens: {
        "sm-0":"480px",
        "sm": '570px',
        "md": '768px',
        "md-2":'900px',
        "lg": '996px',
        "lg-2":'1200px',
        "xl": '1440px',
    },
    colors: {
      "react": "#61DAFB",
      "dark" : "#21222A",
      "light":"#282D35"
    },
    boxShadow:{
      "card":"0 5px 15px rgba(0,0,0,0.35)"
    }
    },
  },
  plugins: [],
}
