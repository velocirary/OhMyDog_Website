/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1420px',
      },
    },
    extend: {
      screens: {
        '2xl': '1420px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // custom colors
        green: {
          50: '#fafaf1',
          100: '#eff0d4',
          200: '#e7e9bf',
          300: '#dbdfa1',
          400: '#d5d98f',
          500: '#cacf73',
          600: '#b8bc69',
          700: '#8f9352',
          800: '#6f723f',
          900: '#555730',
        },
        yellow: {
          50: '#fefbf3',
          100: '#fdf3d9',
          200: '#fcedc6',
          300: '#fbe4ac',
          400: '#fadf9c',
          500: '#f9d783',
          600: '#e3c477',
          700: '#b1995d',
          800: '#897648',
          900: '#695a37',
        },
        blue: {
          50: '#f3f6fe',
          100: '#d9e3fd',
          200: '#c6d6fc',
          300: '#acc3fb',
          400: '#9cb7fa',
          500: '#83a5f9',
          600: '#7796e3',
          700: '#5d75b1',
          800: '#485b89',
          900: '#374569',
        },
        jeans: {
          50: ' #ececee',
          100: '#c3c3ca',
          200: '#a5a5b0',
          300: '#7c7c8c',
          400: '#636376',
          500: '#3c3c54',
          600: '#37374c',
          700: '#2b2b3c',
          800: '#21212e',
          900: '#191923',
        },
      },
      fontFamily: {
        rubik: "Rubik, 'sans-serif'",
        karla: "Karla, 'sans-serif'",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
