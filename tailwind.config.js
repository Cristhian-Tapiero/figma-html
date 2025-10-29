/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        conejera: {
          light_blue: '#1A659E',
          white: '#FFFFFF',
          orange: '#FF6B35',
          bone: '#EFEFD0',
          dark_blue: '#003459',
          cyan: '#6AD9CC',
          light_green: '#98D075',
          medium_green: '#3C9277',
          dark_green: '#166B50',
          light_lawn: '#578838',
          dark_lawn: '#325E15',
          emerald: '#1A8664',
          emerald_dark: '#166B50'
        }
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(100vh)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-out forwards',
        'slide-up-delay': 'slide-up 1s ease-out 0.2s forwards',
      },
    },
  },
  safelist: [
    'animate-slide-up',
    'animate-slide-up-delay',
  ],
  plugins: [],
}