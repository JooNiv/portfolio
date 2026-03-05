import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  globalCss: {
    'html, body': {
      fontFamily: 'sans',
    },
  },

  staticCss: {
    css: [
      {
        properties: {
          color: [
            "text",
            "muted",
            "faint",
            "accent.blue",
            "accent.orange",
            "accent.green",
            "accent.purple",
            "accent.gold",
          ],
          fill: [
            "folder.blue",
            "folder.orange",
            "folder.green",
            "folder.purple",
            "folder.gold",
          ],
          borderColor: [
            "accent.blue",
            "accent.orange",
            "accent.green",
            "accent.purple",
            "accent.gold",
          ],
          bg: [
            "accent.blue/30",
            "accent.blue/10",
            "accent.orange/30",
            "accent.orange/10",
            "accent.green/30",
            "accent.green/10",
            "accent.purple/30",
            "accent.purple/10",
            "accent.gold/30",
            "accent.gold/10",
          ],
        },
      },
    ],
  },

  conditions: {
    extend: {
      dark: '[data-theme="dark"] &',
      light: '[data-theme="light"] &',
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-50%) translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
        },
        tooltipIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      tokens: {
        fonts: {
          sans: { value: 'Righteous, Inter, ui-sans-serif, system-ui, sans-serif' },
          serif: { value: 'Georgia, ui-serif, serif' },
          mono: { value: '"Fira Code", ui-monospace, monospace' },
        },
      },
      breakpoints: {
        xxs: '380px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      semanticTokens: {
        colors: {
          bg: {
            value: { base: '#f0ede8', _dark: '#141210' },
          },
          surface: {
            value: { base: '#ffffff', _dark: '#1e1b18' },
          },
          hover: {
            value: { base: '#f7f5f2', _dark: '#252118' },
          },
          text: {
            value: { base: '#1a1714', _dark: '#f0ede8' },
          },
          muted: {
            value: { base: '#8a847c', _dark: '#8a847c' },
          },
          faint: {
            value: { base: '#c5bfb8', _dark: '#4a4540' },
          },
          border: {
            value: { base: '#e2ddd6', _dark: '#2e2a26' },
          },
          accent: {
            email: {
              value: { base: '#f3eef8', _dark: '#2a2030' },
            },
            linkedin: {
              value: { base: '#eef1fa', _dark: '#1e2230' },
            },
            github: {
              value: { base: '#edf6f1', _dark: '#1e2e24' },
            },
            blue: {
              value: { base: '#4a5fa8', _dark: '#6b80c4' },
            },
            orange: {
              value: { base: '#d4522a', _dark: '#e8714d' },
            },
            green: {
              value: { base: '#3a8a5c', _dark: '#5aaa78' },
            },
            purple: {
              value: { base: '#7a4fa8', _dark: '#9a72c4' },
            },
            gold: {
              value: { base: '#b07d2a', _dark: '#d4a44c' },
            },
          },
          folder: {
            blue: {
              value: { base: '#4a5fa8', _dark: '#6b80c4' },
            },
            orange: {
              value: { base: '#d4522a', _dark: '#e8714d' },
            },
            green: {
              value: { base: '#3a8a5c', _dark: '#5aaa78' },
            },
            purple: {
              value: { base: '#7a4fa8', _dark: '#9a72c4' },
            },
            gold: {
              value: { base: '#b07d2a', _dark: '#d4a44c' },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
