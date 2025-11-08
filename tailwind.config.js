/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma design system colors
        border: 'hsl(214.3 31.8% 91.4%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        // Sidebar colors - exact Figma colors
        'sidebar-bg': '#4A5568',
        'sidebar-active': '#E3F2FD',
        'sidebar-active-text': '#1976D2',
        // Header colors
        'header-bg': '#F5F5F5',
        // Status colors
        'shipped-bg': '#E3F2FD',
        'shipped-text': '#1976D2',
        'processing-bg': '#FFF3E0',
        'processing-text': '#F57C00',
        'cancelled-bg': '#FFEBEE',
        'cancelled-text': '#D32F2F',
        // Metric card icon colors
        'metric-blue': '#E3F2FD',
        'metric-yellow': '#FFF9C4',
        'metric-gray': '#F5F5F5',
        'metric-pink': '#FCE4EC',
      },
    },
  },
  plugins: [],
}

