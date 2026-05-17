/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        orange: {
          DEFAULT: '#E8622A',
          light: '#F4895F',
          dark: '#C04E1A',
          50: '#FDF0EB',
          100: '#FADBCF',
          200: '#F6C7B3',
          300: '#F0A88A',
          400: '#F4895F',
          500: '#E8622A',
          600: '#C04E1A',
          700: '#9E3E14',
          800: '#7A3110',
          900: '#5C250C'
        },
        bege: {
          DEFAULT: '#FDF6EE',
          mid: '#F5E6D3',
          dark: '#E8D5BC',
          50: '#FFFBF7',
          100: '#FDF6EE',
          200: '#F5E6D3',
          300: '#E8D5BC',
          400: '#D9BFA0',
          500: '#C4A582',
          600: '#A98B6A',
          700: '#8B7157',
          800: '#6D5844',
          900: '#503E30'
        },
        brown: {
          DEFAULT: '#5C3317',
          mid: '#8B5A2B',
          light: '#A67B5B',
          50: '#F5EDE6',
          100: '#E6D5C5',
          200: '#D4B9A0',
          300: '#C09C7A',
          400: '#A67B5B',
          500: '#8B5A2B',
          600: '#6D4520',
          700: '#5C3317',
          800: '#4A2812',
          900: '#361E0D'
        },
        'text-main': '#2C1810',
        'text-muted': '#7A5C44',
        primary: {
          DEFAULT: '#FFD600',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#FFD600',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F'
        },
        secondary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
