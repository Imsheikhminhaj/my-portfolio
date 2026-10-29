# Minhaj — Freelance Portfolio

Personal portfolio for Minhaj, a MERN full-stack developer targeting small business clients.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 + CSS custom properties (light/dark) |
| Animation | Framer Motion |
| Icons | lucide-react + inline SVG brand icons |
| Fonts | Inter (body) + Space Grotesk (headings) via Google Fonts |
| Contact form | Formspree (no backend required) |
| Deploy target | Vercel |

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## All content is in one file

All text, links, prices and project data live in `src/data/siteData.js`.
Search for `TODO` to find every placeholder that needs filling in before going live.

## Before going live — TODO checklist

- [ ] Set your **WhatsApp number** (`whatsapp` field)
- [ ] Set your **email** (`email` field)
- [ ] Set your **GitHub** URL (`github` field)
- [ ] Set your **LinkedIn** URL (`linkedin` field)
- [ ] Create a **Formspree** form at formspree.io, paste the ID into `formspreeEndpoint`
- [ ] Set **service prices** (`price` fields in `services` array)
- [ ] Add real **project links** (`liveUrl`, `githubUrl` in each project)
- [ ] Add **project screenshots** to `/public/projects/` and update `image` paths
- [ ] Add your **photo** to `/public/minhaj.jpg` and set `aboutPhoto: '/minhaj.jpg'`
- [ ] Add real **testimonials** (replace placeholder cards in `testimonials` array)
- [ ] Set **projects shipped** count in `quickFacts`
- [ ] Update `og:url` in `index.html` with your real Vercel domain
- [ ] Replace `TODO_YOUR_DOMAIN` in `public/sitemap.xml` with your real domain
- [ ] Add an **Open Graph image** at `/public/og-image.png` (1200x630px)

## Deploying to Vercel

```bash
# Option A — Vercel CLI
npm install -g vercel
vercel

# Option B — Vercel dashboard
# 1. Push this repo to GitHub
# 2. Go to vercel.com → New Project → Import from GitHub
# 3. Framework preset: Vite
# 4. Root directory: leave blank
# 5. Deploy
```

## Folder structure

```
my-website/
  public/
    favicon.svg
    og-image.png
    sitemap.xml
    robots.txt
  src/
    components/
      ui/           Button, Reveal, SectionHeading, ThemeToggle, BrandIcons, FloatingWhatsApp
      Navbar, Hero, Projects, Services, Process, Skills, About, Testimonials, Contact, Footer
    data/siteData.js   <- ALL content lives here
    hooks/useTheme.js, useScrollSpy.js
    styles/index.css   <- design tokens
    App.jsx, main.jsx
  index.html
  vite.config.js
```
