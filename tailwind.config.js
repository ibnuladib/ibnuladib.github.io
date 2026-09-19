/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        graphite: 'rgb(var(--color-graphite) / <alpha-value>)',
        chalk: 'rgb(var(--color-chalk) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        fault: 'rgb(var(--color-fault) / <alpha-value>)',
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
