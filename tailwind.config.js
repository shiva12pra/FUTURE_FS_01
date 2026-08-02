import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)',
        lift: '0 18px 60px rgba(15, 23, 42, 0.35)',
        glow: '0 0 0 1px rgba(255, 255, 255, 0.08), 0 24px 80px rgba(14, 165, 233, 0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(236,72,153,0.18), transparent 28%)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.8s linear infinite',
        drift: 'drift 14s ease-in-out infinite alternate',
        pulseSoft: 'pulseSoft 8s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' }
        },
        drift: {
          '0%': { transform: 'translate3d(-1%, -1%, 0) scale(1)' },
          '100%': { transform: 'translate3d(1%, 1%, 0) scale(1.05)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' }
        }
      }
    }
  },
  plugins: [forms]
};
