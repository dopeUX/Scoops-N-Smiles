module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      animation:{
        slideDown: 'slide_down .5s ease forwards',
        slideUp:'slide_up .5s ease forwards'
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
            top:'-42em'
          }
       }
      }
    },
    fontFamily: {
      'sans': ['Anton', 'Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '700px',
      // => @media (min-width: 768px) { ... }
    
      'mr': '769px',
      // => @media (min-width: 769px) { ... }

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
