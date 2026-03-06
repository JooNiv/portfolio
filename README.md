# Joonas Nivala — Portfolio

Personal portfolio website built with **Astro** and **SolidJS**, featuring a file-explorer-inspired UI, smooth GSAP animations, and a dark/light theme.

**Live site:** [jooniv.github.io/portfolio](https://jooniv.github.io/portfolio)

---

## Features

- Folder-based navigation with animated open/close transitions
- Dark/light theme with system preference detection
- Notes carousel with profanity filtering
- Project modals with descriptions and links
- Fully responsive layout
- GSAP animations throughout

---

## Tech Stack

| Tool | Purpose |
| :--- | :--- |
| [Astro](https://astro.build) | Static site framework |
| [SolidJS](https://solidjs.com) | Reactive UI components |
| [Panda CSS](https://panda-css.com) | Type-safe CSS-in-JS styling |
| [GSAP](https://gsap.com) | Animations |
| [solid-icons](https://solid-icons.vercel.app) | Icon library |

---

## Getting Started

### Prerequisites

- Node.js (astro combatible)
- npm

### Install & Run

```sh
# Install dependencies
npm install

# Generate Panda CSS system
npm run prepare

# Start dev server
npm run dev
```

The site will be available at `http://localhost:4321`.

---

## Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run prepare` | Regenerate Panda CSS styled-system |

---

## Project Structure

```text
/
├── public/              # Static assets (favicons, SVGs)
├── src/
│   ├── components/      # UI components (folders, modals, layout)
│   ├── content/         # JSON content (projects, skills, about, contact)
│   ├── layouts/         # Astro layout wrappers
│   ├── pages/           # Astro pages
│   └── utils/           # Helpers (text parsing, icon maps, CVA)
├── astro.config.mjs
├── panda.config.ts
└── package.json
```

---
