/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'oklch(var(--color-ink) / <alpha-value>)',
        paper: 'oklch(var(--color-paper) / <alpha-value>)',
        graphite: 'oklch(var(--color-graphite) / <alpha-value>)',
        chalk: 'oklch(var(--color-chalk) / <alpha-value>)',
        accent: 'oklch(var(--color-accent) / <alpha-value>)',
        fault: 'oklch(var(--color-fault) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
      },
      fontSize: {
        eyebrow: ['0.7rem', { lineHeight: '1rem', letterSpacing: '0.18em' }],
      },
    },
  },
  plugins: [],
}
