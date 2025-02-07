/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //tambahkan disini
      // spacing :{
      //   13: '3.25rem',
      // }
      
      blur: {
        s: "2px",
        xs: "1px",  // Blur kecil banget
        xxs: "0.5px" // Blur super kecil
      },

      fontFamily:{
        "monos" : ["Space Mono", "sans-serif"],
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

