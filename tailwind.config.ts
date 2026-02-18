import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#6c63ff',
          blue: '#3b82f6',
        },
        dark: {
          1: '#0f0f1a',
          2: '#1a1a2e',
          3: '#16213e',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
