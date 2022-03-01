module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      animation:{
        slideDown: 'slide_down .5s ease forwards',
        slideUp:'slide_up .5s ease forwards',
        zoomIn:'zoom_in .5s ease forwards'
      },
      keyframes:{
        slide_down:{
           from:{
             top:'-45em'
           },
           to:{
             top:'0'
           }
        },
        slide_up:{
          from:{
            top:'0'
          },
          to:{
            top:'-45em'
          }
       },
        zoom_in:{
          from:{
            transform:'scale(1)'
          },
          to:{
            transform:'scale(1.1)'
          }
        }
      }
    },
    fontFamily: {
      'sans': ['Anton', 'Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      'sm': '600px',
      // => @media only screen and(min-width: 600px) { ... }

      'cs':{'max': '650px'},
      //=> @media (min-width: 650px) { ... }

      'tab':{'max': '700px'},

      'md': '700px',
      // => @media (min-width: 700px) { ... }
       
      'mr': '769px',
      // => @media (min-width: 769px) { ... }
      
      'cp':{'max':'979px'},
     // => @media (max-width : 979px) { ... } 

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
