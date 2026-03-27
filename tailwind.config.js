export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#003285',
        'secondary-blue': '#2A629A',
        'accent-orange': '#FF7F3E',
        'canvas-yellow': '#FFDA78',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'elevated': '0 12px 40px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'btn': '0.375rem',
        'card': '1rem',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
