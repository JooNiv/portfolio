import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  staticCss: {
    css: [
      {
        properties: {
          color: [
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
            "accent.orange/30",
            "accent.green/30",
            "accent.purple/30",
            "accent.gold/30",
          ],
        },
      },
    ],
  },

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        xxs: '320px',
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
            DEFAULT: { value: '#f0ede8' },
            dark: { value: '#141210' }
          },
          surface: {
            DEFAULT: { value: '#ffffff' },
            dark: { value: '#1e1b18' },
            hover: {
              DEFAULT: { value: '#f7f5f2' },
              dark: { value: '#252118' }
            }
          },
          text: {
            DEFAULT: { value: '#1a1714' },
            dark: { value: '#f0ede8' },
            muted: {
              DEFAULT: { value: '#8a847c' },
              dark: { value: '#8a847c' }
            },
            faint: {
              DEFAULT: { value: '#c5bfb8' },
              dark: { value: '#4a4540' }
            },

          },
          border: {
            DEFAULT: { value: '#e2ddd6' },
            dark: { value: '#2e2a26' }
          },
          accent: {
            email: {
              DEFAULT: { value: '#f3eef8' },
            },
            linkedin: {
              DEFAULT: { value: '#eef1fa' },
            },
            github: {
              DEFAULT: { value: '#edf6f1' },
            },
            blue: {
              DEFAULT: { value: '#4a5fa8' },
              dark: { value: '#6b80c4' }
            },
            orange: {
              DEFAULT: { value: '#d4522a' },
              dark: { value: '#e8714d' }
            },
            green: {
              DEFAULT: { value: '#3a8a5c' },
              dark: { value: '#5aaa78' }
            },
            purple: {
              DEFAULT: { value: '#7a4fa8' },
              dark: { value: '#9a72c4' }
            },
            gold: {
              DEFAULT: { value: '#b07d2a' },
              dark: { value: '#d4a44c' }
            }
          },
          folder: {
            blue: {
              DEFAULT: { value: '#4a5fa8' },
              dark: { value: '#6b80c4' }
            },
            orange: {
              DEFAULT: { value: '#d4522a' },
              dark: { value: '#e8714d' }
            },
            green: {
              DEFAULT: { value: '#3a8a5c' },
              dark: { value: '#5aaa78' }
            },
            purple: {
              DEFAULT: { value: '#7a4fa8' },
              dark: { value: '#9a72c4' }
            },
            gold: {
              DEFAULT: { value: '#b07d2a' },
              dark: { value: '#d4a44c' }
            }
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
