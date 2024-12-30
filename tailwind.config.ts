import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Pacifico', 'cursive'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: { themes: ['valentine'] },
} satisfies Config
