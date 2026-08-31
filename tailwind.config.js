/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#105133',
          dark: '#0A3823',
          light: '#166943',
          surface: '#0D4229',
        },
        sage: {
          DEFAULT: '#7F9B8D',
          light: '#9EB9AD',
          dark: '#508269',
          tint: '#EEF4F1',
        },
        mint: {
          DEFAULT: '#C8D9CF',
          light: '#E2ECE6',
          soft: '#D4E3DB',
          tint: '#F3F8F5',
        },
        cream: {
          DEFAULT: '#FAF8F3',
          card: '#FFFFFF',
          subtle: '#F4EFE7',
          dark: '#ECE5DA',
        },
        charcoal: {
          DEFAULT: '#1C1C1A',
          muted: '#4A4A46',
          light: '#767670',
          border: '#E2DCD2',
          cardBorder: '#EBE5DA',
        }
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brand': '0 4px 20px -2px rgba(30, 70, 56, 0.08)',
        'brand-hover': '0 12px 30px -4px rgba(30, 70, 56, 0.14)',
        'card': '0 2px 8px 0 rgba(28, 28, 26, 0.04)',
      },
      borderRadius: {
        'brand': '4px',
        'signature': '8px',
      }
    },
  },
  plugins: [],
}
