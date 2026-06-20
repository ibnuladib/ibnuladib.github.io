/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0E0E10',
        paper: '#161618',
        graphite: '#9CA3AF',
        chalk: '#D4D4D8',
        accent: '#39FF14',
        fault: '#FF3B30',
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
