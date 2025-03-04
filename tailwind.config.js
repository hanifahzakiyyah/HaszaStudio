/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      blur: {
        s: "2px",
        xs: "1px",  
        xxs: "0.5px" 
      },

      fontFamily:{
        "monos" : ["Space Mono", "sans-serif"],
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

