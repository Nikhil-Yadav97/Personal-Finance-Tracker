// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include your React/Vite source files
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      screens: {
        '2xl': '1920px',
      },
      colors: {
        primary: '#875cf5',
      },
    },
  },
  plugins: [],
};
