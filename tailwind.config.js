/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        'dark-gray': '#1d1d1f',
        'cool-gray': '#86868b',
        amber: '#d97706',
        orange: '#ea580c',
        terracotta: '#c2410c',
        'warm-gray': '#f5f5f7',
        'gray-50': '#fafaf9',
        'gray-100': '#f5f5f4',
        'gray-200': '#e7e5e4',
        'gray-300': '#d6d3d1',
        'gray-500': '#78716c',
        'gray-700': '#44403c',
        'gray-900': '#1c1917',
        background: '#ffffff',
        surface: '#f5f5f7',
        'text-primary': '#1d1d1f',
        'text-secondary': '#86868b',
        'text-tertiary': '#78716c',
        border: '#e7e5e4',
        accent: '#d97706',
        success: '#30d158',
        danger: '#ff3b30'
      },
      fontFamily: {
        heading: [
          'Merienda',
          'cursive'
        ],
        headingAlt: [
          'Cormorant Garamond',
          'serif'
        ],
        body: [
          'Merienda',
          'cursive'
        ],
        accent: [
          'Dancing Script',
          'cursive'
        ]
      },
      fontSize: {
        hero: [
          '3.5rem',
          {
            lineHeight: '1.1',
            fontWeight: '600',
            letterSpacing: '-0.03em'
          }
        ],
        section: [
          '2.5rem',
          {
            lineHeight: '1.2',
            fontWeight: '500',
            letterSpacing: '-0.02em'
          }
        ],
        heading: [
          '2rem',
          {
            lineHeight: '1.25',
            fontWeight: '600',
            letterSpacing: '-0.015em'
          }
        ],
        subheading: [
          '1.5rem',
          {
            lineHeight: '1.3',
            fontWeight: '500',
            letterSpacing: '-0.01em'
          }
        ],
        'product-title': [
          '1.125rem',
          {
            lineHeight: '1.33',
            fontWeight: '500'
          }
        ],
        'product-price': [
          '1rem',
          {
            lineHeight: '1.5',
            fontWeight: '600'
          }
        ],
        body: [
          '1rem',
          {
            lineHeight: '1.6',
            fontWeight: '400',
            letterSpacing: '0.01em'
          }
        ],
        caption: [
          '0.875rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
            letterSpacing: '0.02em'
          }
        ],
        small: [
          '0.75rem',
          {
            lineHeight: '1.4',
            fontWeight: '400',
            letterSpacing: '0.03em'
          }
        ]
      },
      spacing: {
        '4xs': '0.125rem',
        '3xs': '0.25rem',
        '2xs': '0.5rem',
        xs: '0.75rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
        '4xl': '8rem'
      },
      borderRadius: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        hover: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms'
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [],
}