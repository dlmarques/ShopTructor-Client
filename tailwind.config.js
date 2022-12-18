/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      'darkOrange': '#DC4712',
      'orange': '#EE712B',
      'cream': '#F1E9E3',
      'white': '#FBF7F7'
    },
    fontFamily: {
      pacifico: "Pacifico, cursive",
      nunito: "Nunito, sans-serif"
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  
  plugins: [

  ],
  
}
