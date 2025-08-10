import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#C3561E',
          600: '#C4821F',
          700: '#9E3C10',
        },
        ink: {
          50: '#F7E7CB', // paper
          200: '#CCB58F', // paper-muted
          600: '#5A2812', // headings
          800: '#1B1712', // body text
        },
        hero: {
          900: '#314E42',
        },
        olive: {
          500: '#7D8165',
        },
      },
      borderRadius: {
        pill: '9999px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme('spacing.2'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.pill'),
          fontWeight: '600',
          transition: 'transform 150ms, box-shadow 150ms, background-color 150ms',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.brand.500'),
          color: '#fff',
        },
        '.btn-primary:hover': {
          backgroundColor: theme('colors.brand.600'),
          transform: 'translateY(-1px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        },
        '.btn-ghost-light': {
          border: '1px solid rgba(255,255,255,0.6)',
          color: '#fff',
          background: 'transparent',
        },
        '.btn-ghost-light:hover': {
          background: 'rgba(255,255,255,0.08)',
        },
      });
    }),
  ],
} satisfies Config;
