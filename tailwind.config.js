/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#16202a',
        fuel: '#f04f32',
        road: '#2f3c48',
        mist: '#eef2f5',
        mint: '#3fb984'
      },
      boxShadow: {
        panel: '0 16px 40px rgba(22, 32, 42, 0.08)'
      }
    }
  },
  plugins: []
};
