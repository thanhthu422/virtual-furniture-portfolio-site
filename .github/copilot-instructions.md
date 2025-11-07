# Copilot Instructions for AI Agents

## Project Overview

- **Framework**: Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS v4
- **Purpose**: Virtual furniture portfolio site with a filterable product gallery, product modals, and a modern, responsive UI.
- **Key UI**: Uses shadcn/ui (Radix UI primitives) and Lucide icons.

## Architecture & Patterns

- **App Router**: All routing and layouts are in `src/app/` (e.g., `layout.tsx`, `page.tsx`).
- **Components**: Main React components in `src/components/`.
  - `ui/`: Reusable UI primitives (from shadcn/ui, Radix UI)
  - `Hero.tsx`: Static hero section (server component)
  - `Navigation.tsx`: Client navigation bar ("use client")
  - `ProductGallery.tsx`: Client component, manages product list/filtering
  - `ProductModal.tsx`: Client dialog/modal for product details
  - `AboutUs.tsx`: About Us component
  - `Footer.tsx`: Footer component
- **Products**: Defined in a local array in `ProductGallery.tsx`. To add products, update this array.
- **AboutUsUs **: `How we build` just use grid
- **Styling**: Tailwind CSS v4 with custom color palette and CSS variables. Global styles in `src/app/globals.css`.

## Developer Workflows

- **Install**: `npm install`
- **Dev Server**: `npm run dev` (http://localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Production**: `npm run start`
- **Deployment**: Vercel (auto-detects Next.js)

## Conventions & Tips

- **Component Types**: Server components by default; use `"use client"` for interactivity/state.
- **UI Primitives**: Prefer using/adding to `src/components/ui/` for new UI elements.
- **No API/Backend**: All data is static/local; no backend or API calls.
- **Images**: Use Unsplash links for product images.
- **Design System**: Follow the warm, cozy palette in README.md.

## Examples

- **Add Product**: Edit `products` array in `ProductGallery.tsx`.
- **Add UI**: Place new primitives in `src/components/ui/`.
- **Update Navigation**: Edit `Navigation.tsx` (client component).

## References

- See `README.md` for full setup, design, and deployment details.
- See `src/components/` for all main UI logic.

---

For any unclear or missing conventions, consult the README or ask for clarification.
