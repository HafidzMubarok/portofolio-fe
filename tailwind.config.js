/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#172554',
        'secondary': '#38bdf8',
        'light': '#f1f5f9',
      },
      backgroundImage: {
        'blob': "url('/img/blob.svg')"
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50': '50%',
      '100': '100%',
      '16': '4rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

