import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F7',
        surface: '#FFFFFF',
        border: '#E8E4DF',
        'text-primary': '#1A1410',
        'text-muted': '#6B6560',
        accent: '#C2185B',
        'accent-light': '#FCE4EC',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

