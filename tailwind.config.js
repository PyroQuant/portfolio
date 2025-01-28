/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981', // Verde esmeralda
          dark: '#059669',
          light: '#34d399',
        },
        dark: {
          DEFAULT: '#0a0a0a', // Negro profundo
          lighter: '#171717',
          card: '#1a1a1a',
        },
        light: {
          DEFAULT: '#f9fafb',
          dark: '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'text-shimmer': 'text-shimmer 2.5s ease infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'border-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(16, 185, 129, 0.4)',
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(16, 185, 129, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};