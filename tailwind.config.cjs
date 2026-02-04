/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
    './libs/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pitch-black': '#231C07',
        'dark-coffee': '#392A16',
        'mauve-bark': '#634133',
        'cinnamon-wood': '#B86F52',
        'coral-glow': '#F78764',
        'cream': '#FDF8F3',
        'gold': '#C9A962',
        'success': '#4A7C59',
        'error': '#8B3A3A',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(35, 28, 7, 0.3)',
        'elevated': '0 8px 40px rgba(35, 28, 7, 0.4)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #392A16 0%, #231C07 100%)',
        'gradient-warm': 'linear-gradient(135deg, #B86F52 0%, #F78764 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
