/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",                // Main app file
    "./app/**/*.{js,jsx,ts,tsx}",           // All files in the app directory
    "./app/(tabs)/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

