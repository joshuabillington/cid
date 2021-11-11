module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
        'actor': ['"Noto Sans"', 'sans-serif'],
      },
     extend: {
      backgroundImage: {
        'hero-img': "url('https://res.cloudinary.com/ddd2lfnyh/image/upload/v1636601632/pexels-damir-mijailovic-3695238_cibnvs.jpg')",
       }
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
