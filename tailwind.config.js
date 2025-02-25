/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat']
  },
    extend: {},
  },
  plugins: [
  require("daisyui"),
  require('tailwindcss-animatecss'),
],
  
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

