/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        poppins:[
          "Poppins","sans-serif"]      
        },
        colors: {
          primary: '#6153CD',
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'3rem',  
       
      }
    }
  },
  plugins: [],
}
}
