# Repository Summary

## Overview
- Single-page React site for boxer Kha Lu, built with Vite and React Router.
- Routes include Home, About, Record, Sponsors, and Contact with animated page transitions.
- Content is a mix of JSON data (home/about) and TypeScript data (fight history).

## Tech Stack
- Runtime: React 18, TypeScript, Vite 5 (ESM).
- Routing/animation: react-router-dom, framer-motion.
- UI/UX: lucide-react icons, react-slick carousel + slick-carousel CSS.
- Forms: EmailJS (@emailjs/browser) for contact form submission.
- Tooling: ESLint, TypeScript, gh-pages for deployment.

## Project Structure
- `public/` static assets (404, CNAME, Vite logo, `video/kha-vid.mp4`).
- `src/`
  - `assets/` images and icons used across pages and components.
  - `components/` shared UI blocks (Navbar, Footer, carousels, sections).
  - `pages/` route-level views (Home, About, Record, Sponsors, Contact).
  - `data/` TypeScript data modules (fight record list).
  - `App.tsx` routing + animated transitions.
  - `main.tsx` app bootstrap.
  - `index.css` global styles, fonts, CSS variables.
- `dist/` build output.
- `index.html`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.js` at repo root.

## App Flow and Routing
- `src/main.tsx` mounts `App` into `#root` and loads `src/index.css`.
- `src/App.tsx` wraps routes in `BrowserRouter`, applies `framer-motion` transitions, and renders `Navbar`, `Footer`, and `ScrollToTop`.
- Routes:
  - `/` -> `Home`
  - `/about` -> `About`
  - `/record` -> `Record`
  - `/sponsors` -> `Sponsors`
  - `/contact` -> `Contact`
  - `*` fallback -> `Home`

## Components
- `Navbar` (`src/components/Navbar/Navbar.tsx`): sticky navigation with scroll hide/show, mobile hamburger, active link styling, and social links.
- `Footer` (`src/components/Footer/Footer.tsx`): site map links + social icons and copyright.
- `HomeVideo` (`src/components/HomeVideo/HomeVideo.tsx`): autoplaying hero video from `public/video/kha-vid.mp4`.
- `FightHistory` (`src/components/FightHistory/FightHistory.tsx`): renders the latest 3 fights from `src/data/fightData.tsx` and maps opponents to images/flags.
- `HomePT` (`src/components/HomePT/HomePT.tsx`): personal training blurb and availability grid with Instagram CTA.
- `HomeSponsors` (`src/components/HomeSponsors/HomeSponsors.tsx`): react-slick carousel of sponsor logos with tiers and a CTA to `/sponsors`.
- `ScrollToTop` (`src/components/ScrollToTop/ScrollToTop.tsx`): resets scroll position on route changes.

## Pages
- `Home` (`src/pages/Home/Home.tsx`): hero section driven by `homeData.json`, then HomeVideo, FightHistory, HomePT, HomeSponsors.
- `About` (`src/pages/About/About.tsx`): biography, stats, and accomplishments using `aboutData.json` with mapped images.
- `Record` (`src/pages/Record/Record.tsx`): overall record summary and expandable fight table from `fightData.tsx`.
- `Sponsors` (`src/pages/Sponsors/Sponsors.tsx`): gold/silver sponsor grids with CTA to contact and Instagram.
- `Contact` (`src/pages/Contact/Contact.tsx`): contact info + EmailJS form with success modal.

## Data
- `src/pages/Home/homeData.json`: hero title/subtitle and CTA text.
- `src/pages/About/aboutData.json`: biography, stats, accomplishments, and image keys.
- `src/data/fightData.tsx`: typed list of fights, dates, results, and metadata.

## Styling, Fonts, and Colours
- Global CSS variables in `src/index.css`:
  - `--color-primary: #b8a153` (gold)
  - `--color-secondary: #383737`
  - `--color-background: #d3d3d3`
  - `--color-black: #000000`
  - `--color-white: #ffffff`
  - `--color-grey: #979797`
  - `--color-red: #dc3545`
  - `--color-green: #28a745`
- Fonts imported from Google Fonts: Bebas Neue, Oswald, Montserrat, Pacifico, Chakra Petch, Anton, Rye.
- Additional notable palette usage across CSS:
  - Gold/sponsor gradients: `#BF953F`, `#FCF6BA`, `#B38728`, `#FBF5B7`, `#AA771C`, `#FFD700`.
  - Silver accents: `#C0C0C0`, `#bcc6cc`, `#eee`.
  - Dark UI surfaces: `#1a1a1a`, `#222`, `#111` plus many `rgba(0,0,0,...)` overlays.
  - Neutral text: `#f8f9fa`, `#333`, `#666`.
  - Instagram gradient: `#f09433`, `#e6683c`, `#dc2743`, `#cc2366`, `#bc1888`.

## Notes
- Animations handled via `framer-motion` for route transitions; component-level effects are mostly CSS-based.
- Deployment script uses `gh-pages` with `dist/` output.