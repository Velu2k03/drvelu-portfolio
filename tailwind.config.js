/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: { accent: '#a74729' },
      fontFamily: {
        sans: ['var(--font-sans)', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'serif'],
      },
      boxShadow: {
        glass: '0 18px 40px -24px rgba(15, 23, 42, 0.28)',
      },
    },
  },
  plugins: [],
};
