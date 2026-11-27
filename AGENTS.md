<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Pedal Pals: Project Rules

## Stack (do not add or swap without asking)

- Next.js App Router, TypeScript strict mode
- Tailwind CSS + shadcn/ui (Base UI) for primitives; no other UI library
- PostgreSQL + Prisma 7 (config file is prisma7.config.ts); Auth.js (next-auth v5 beta, Google)
- Recharts for admin charts; Framer Motion for animation
- ESLint + Prettier

## Structure

- app/ routes only, pages stay thin
- app/(store)/ public pages; app/admin/ admin pages (ADMIN role only)
- components/ui (shadcn), components/shared (Button, ProductCard, TornDivider, SectionHeading), components/<feature>
- lib/ helpers; all DB access through lib/db.ts
- services/ business logic (orderService, shippingFeeService)
- Validation with zod

## Style

- Functional components, named exports, one component per file
- Server components by default; "use client" only when needed
- Money stored as integer rupiah, never floats
- Descriptive names, no abbreviations

## Design system

- Follow design/DESIGN.md for all UI; page images are in /design (one per page, e.g. design/shop.png)
- Colors via Tailwind theme tokens only (ink, cream, paper, amber); no hard-coded hex in components
- Three fonts only: brush display (titles), condensed sans (subheadings), Inter (body)
- Dark and cream sections alternate, separated by <TornDivider />
- Reuse shared components; never restyle one-off
- Hand-made texture (torn edges, splatters, doodles, grain) comes from assets in public/textures and public/doodles, applied with CSS masks and theme token colors. Never draw them as code shapes.

## Commands

- Dev: npm run dev
- Lint: npm run lint
- Typecheck: npx tsc --noEmit
- Format: npx prettier --write .

## Workflow

- One task at a time; for large tasks give a short plan before editing
- Don't refactor unrelated files
- Never read or edit .env; add new keys to .env.example
- Do not install new packages, run prisma migrations, or run git commit/push without asking
- After changes run lint and typecheck, then summarize what changed
- Ask if requirements are unclear instead of guessing

## Routes and structure

- All URLs live in lib/routes.ts. Never write an internal path like "/shop" in a component; use routes.shop, shopCategoryHref(), productHref().
- app/(store) = public pages with the shop header; app/(auth) = login and register; /account = logged-in dashboard; app/admin = admin (role check).
- Components are grouped by feature: components/home, about, auth, shared, ui.
- Torn edges are always overlay dividers, placed inside the dark section that shows through the tear. Never inside a cream section that has its own grain.
- Decorations: 4 to 10 per section, hidden below lg, theme tokens only, names from /dev/decor.