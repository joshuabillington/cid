module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
        'actor': ['"Oxygen"', 'sans-serif'],
      },
     extend: {
      backgroundImage: {
        'hero-img': "url('https://res.cloudinary.com/ddd2lfnyh/image/upload/v1636670670/pexels-olia-danilevich-4974915_jy2hdy.jpg')",
       }
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
