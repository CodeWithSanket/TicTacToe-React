/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '3': 'repeat(3, minmax(0, 0.19fr))'
      }
    }
  },
  plugins: [],
}

