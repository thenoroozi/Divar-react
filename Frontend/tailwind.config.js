/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      fontFamily:{
       "vazir-Thin": "Vazir Thin",
       "vazir-Regular": "Vazir Regular",
       "vazir-Medium": "Vazir Medium",
       "vazir-Bold": "Vazir Bold",
       "vazir-ExtraBold": "Vazir ExtraBold",
      },
      extend: {
         colors:{
            "primary": "#a62626",
            "primary-Hover": "#BD3636",
         },
      },
   },
   plugins: [],
}

