/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        mixBlendMode: {
          'difference': 'difference',
        }
      },
    },
    variants: {
      extend: {
        mixBlendMode: ['hover'],
      },
    },
    plugins: [],
  }