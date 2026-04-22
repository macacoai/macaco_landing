# Macaco — landing page (v2)

Marketing site for the Macaco product.

## Stack

- Next.js 16.2.1 (App Router)
- React 19.2.4
- TypeScript 5
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Three.js 0.160 (hero aurora scene)

## Requirements

- Node.js compatible with Next.js 16
- npm

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Structure

- `src/app/` — App Router root (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components/` — UI sections: hero + WebGL aurora scene, app mockup, beta access form, team, community, navbar, footer.
- `src/lib/` — `LanguageContext` (ES/EN toggle with `localStorage` persistence), shared copy strings, smooth-scroll helper.
- `public/` — images, custom fonts, icons.

## Contributing

Read `AGENTS.md` before modifying code. This Next.js version has breaking changes relative to prior major releases, and agent rules in that file apply to all contributors (human and automated).
