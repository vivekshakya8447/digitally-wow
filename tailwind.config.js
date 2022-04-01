module.exports = {
 
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
   
     extend: {
      height: {
        417: "417px"
    },
      fontSize:{
        '1.5xl': "22px",
          xxs: "10px",
        xxxs: "8px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        pacifico: ['Pacifico', "scursive"],
      },
      boxShadow:{
        productShadow: "0px 3px 3px rgba(0, 0, 0, 0.15)",
      },
     
      colors: {
       primary: "#1A2238",
       gray: "#3B3B3B",
       accent: "#FF6A3D",
       surface: "#F8F8FB",
       brown: "#660000",
      secondary:{
        1: "#9DAAF2",
        2: "#F4DB7D",
        3: "#F8F8FB",
        4: "#9DAAF2",
      },
    },
     },
   },
   variants: {
     extend: {
      divideColor: ['group-hover'],
     },
   },
   plugins: [],
 }
