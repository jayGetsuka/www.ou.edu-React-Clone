/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pack-train': "url('/src/img/outside-class-march.jpg')",
      },
    },
  },
  plugins: [],
}
