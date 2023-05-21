/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
    
    extend: {
      colors: {
        'twilight': '#4C4C6D',
        'mintfrost': '#E8F6EF',
        'evergreen': '#1B9C85',
        'honeydew': '#FFE194',
      },
    },
  },
  plugins: [],
};
