# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Public marketing site for **Neuilly Basketball Association**, built with Next.js (App Router) + TypeScript + Prisma (PostgreSQL). Content is in French.

## Commands

```bash
npm run dev          # start dev server (Turbopack)
npm run build        # prisma generate + next build
npm run lint         # next lint

npm run db:push      # push schema.prisma to the DB without a migration
npm run db:migrate   # create/apply a dev migration (prisma migrate dev)
npm run db:studio    # open Prisma Studio
npm run db:seed      # run prisma/seed.ts (currently a no-op)
npm run db:generate  # regenerate the Prisma client
```

There is no test runner configured in this repo.

## Architecture

### Routing
- All public pages live under `src/app/(public)/` (a route group — no `/public` segment in the URL), sharing `src/app/(public)/layout.tsx` which wraps pages in `PublicLayout` (Navbar/Footer).
- Each page follows a **server page + client wrapper** split when interactivity is needed: `page.tsx` is an async Server Component that fetches data from Prisma directly (no API layer) and passes it as props to a `*ClientWrapper.tsx` / `*Client.tsx` component marked `"use client"` (e.g. `equipes/page.tsx` → `EquipesClientWrapper.tsx`, `boutique/page.tsx` → `BoutiqueClient.tsx`, `stages/page.tsx` → `StagesClient.tsx`).
- Server pages that read from the DB set `export const dynamic = "force-dynamic"` and wrap the Prisma call in try/catch, falling back to an empty array/list on failure rather than throwing — pages must render even if the DB is unreachable.
- `src/app/actions/` holds `"use server"` Server Actions (e.g. `contact.ts`), each validating `FormData` with a Zod schema and returning `{ success }` / `{ error }` rather than throwing, for direct use in form components.
- **Note:** `src/api/auth/[...nextauth]/route.ts` sits outside `src/app`, so it is *not* wired up as an actual Next.js route (App Router route handlers must live under `src/app/api/`). Auth (`src/lib/auth.ts`, NextAuth Credentials provider + Prisma `User`/`Role`) and any admin dashboard consuming it (e.g. `revalidatePath("/admin/contacts")` in `contact.ts`) are not yet built out — there is currently no `/admin` route or `/login` page in `src/app`.

### Data layer
- `prisma/schema.prisma` (PostgreSQL) defines: `Team` (with `Gender` enum) → `Player[]` and `Training[]`, `Post` (blog/actualités), `Carousel`, `Contact`, `User` (with `Role` enum, for the not-yet-built admin auth). All models use `@@map(...)` to snake_case table names and share `createdAt`/`updatedAt` conventions.
- `src/lib/prisma.ts` exports the singleton `prisma` client (global caching to survive HMR in dev).
- `src/types/index.ts` mirrors the Prisma models as hand-written interfaces (`TeamWithPlayers`, `Player`, `Post`, `Training`, `ContactMessage`, etc.) — used instead of generated Prisma types in component props; keep these in sync manually when the schema changes. It also augments `next-auth`'s `Session`/`User`/`JWT` types with `firstname`/`lastname`/`role`.
- `src/lib/mock/` (`teams.ts`, `images.ts`) contains static placeholder data with parallel but distinct types (e.g. `MockTeam`/`MockPlayer`) used for design/prototyping before a page is wired to Prisma — don't assume these are the source of truth for real content.
- Email: `src/lib/mailer.ts` exports a `Resend` client; `src/lib/utils/season.ts` computes the current "YYYY — YYYY" season string (season starts in September).

### Styling — SCSS-first (see `GEMINI.md` for the full house rules)
This is the most important convention in the codebase:
- **Do not write ad-hoc Tailwind utility classes for new components/pages.** Tailwind is imported but secondary; all custom UI should use hand-written SCSS.
- Use a co-located **SCSS Module** per component/page (`ComponentName.module.scss`), imported as `s` (`import s from "./page.module.scss"`) and applied via `s.className`.
- Always import shared design tokens at the top of a module: `@use '@/styles/vars' as *;` — variables are defined in `src/styles/_vars.scss` (`$blue`, `$blue-dark`, `$blue-light`, `$red`, `$red-light`, `$grey-100/200/400/600`, breakpoints `$bp-sm/md/lg/xl`, easings `$ease`/`$ease-bounce`).
- Reuse the global utility classes from `src/styles/globals.scss` before writing bespoke CSS for common structures: `.container-custom`, `.btn-primary`/`.btn-secondary`/`.btn-outline`/`.btn-outline-blue`, `.badge-red`/`.badge-blue`/`.badge-white`, `.animate-fade-up`/`.animate-fade-in`/`.animate-float`.
- Path alias `@/*` → `./src/*` (see `tsconfig.json`).

### Components
- `src/components/public/` is organized by domain: `home/` (landing page sections), `team/` (`TeamCard`, `TeamModal`, `TeamSection`, `TeamsFilter`), `player/`, `blog/`, `contact/`, `layout/` (`Navbar`, `Footer`, `PublicLayout`, `WhatsAppFloatingButton`), `infrastructure/`, `icons/`. Each component has its co-located `.module.scss`.