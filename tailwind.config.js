/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",  // Include your HTML file(s)

    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'fade-in-delay': 'fadeIn 1.5s ease-out',
        'bounce-once': 'bounceOnce 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
