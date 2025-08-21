/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Inter":['Inter Tight', 'sans-serif'],
        "Outfit": ['Outfit','sans-serif'],
      },
      colors: {
        gradientborder: "linear-gradient(to right,#4BB6EF 16.75%, #DD933E 50.1%, #DD933E 50.1%, #D82E5A 138.04%)",
        colorTheme:"#4BB6EF 16.75%, #DD933E 50.1%, #DD933E 50.1%, #D82E5A 138.04%",
        colorThemeSlider:"#4BB6EF -7.45%, #DD933E 50.1%, #DD933E 50.1%, #D82E5A 138.04%",
        navbgcolor: "#22272d",
        fixnavbgcolor: "#121212",
        bodycolor: "#181e25",
        slidercolor:"#1c2228"
      },
    },
  },
 
}
