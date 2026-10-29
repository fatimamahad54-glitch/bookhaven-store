/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#badccf',
          300: '#8ec2b1',
          400: '#5ea28f',
          500: '#3f8573',
          600: '#2d6a5c',
          700: '#23544a',
          800: '#1c433b',
          900: '#14332d',
          950: '#0a1d1a',
        },
        warm: {
          50: '#fdfbf7',
          100: '#f7f3ea',
          200: '#efe6d5',
          300: '#e3d4bc',
          400: '#d2bc9c',
          500: '#c1a47e',
          600: '#a88965',
          700: '#876c4f',
          800: '#6f5742',
          900: '#5c4838',
          950: '#32261d',
        },
        gold: {
          50: '#fbf9f0',
          100: '#f5efd9',
          200: '#eadab2',
          300: '#dbc085',
          400: '#cca258',
          500: '#bf8c39',
          600: '#a7722d',
          700: '#845326',
          800: '#6d4325',
          900: '#5c3922',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'book': '0 10px 25px -5px rgba(10, 29, 26, 0.15), 0 8px 10px -6px rgba(10, 29, 26, 0.1)',
        'book-hover': '0 20px 35px -5px rgba(10, 29, 26, 0.25), 0 10px 10px -5px rgba(10, 29, 26, 0.15)',
        'soft': '0 4px 20px -2px rgba(10, 29, 26, 0.05)',
      }
    },
  },
  plugins: [],
}
