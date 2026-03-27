# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Type check (astro check) + production build
npm run preview   # Preview production build
```

## Architecture

Personal portfolio/blog site for charlesbrands.com built with **Astro v4 + Tailwind CSS + TypeScript**. All pages are statically generated (SSG) — no server runtime.

### Routing

File-based routing from `src/pages/`:
- `/` → `src/pages/index.astro` — homepage with 3 most recent projects
- `/projects` → `src/pages/projects/index.astro` — all projects sorted newest first
- `/projects/[slug]` → `src/pages/projects/[slug].astro` — dynamic SSG detail pages

### Content Collection

Projects live in `src/content/projects/` as `.mdx` files with cover images. The Zod schema in `src/content/config.ts` defines required frontmatter: `title`, `tags`, `cover` (min 1000px wide), `publishDate`, `description`, and optional `codeLink`/`demoLink`.

### Styling

Tailwind with a custom color scheme (teal primary, zinc secondary, yellow accent). Base styles in `src/assets/styles/base.css`; Tailwind's base styles are disabled (`applyBaseStyles: false`) in `astro.config.mjs` so `base.css` controls the baseline. The typography plugin uses custom teal prose styles for MDX content rendering.

### Key Files

- `src/consts.ts` — site title and description constants
- `src/content/config.ts` — content collection schema
- `tailwind.config.mjs` — custom color palette and typography config
- `astro.config.mjs` — Astro integrations (Tailwind, MDX, astro-icon)
