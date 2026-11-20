# Mohsin Ali — Portfolio

Personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **CSS Modules**.

## Run it locally

Requirements: Node.js 20 or newer.

```bash
npm install      # install dependencies (one time)
npm run dev      # start dev server -> http://localhost:3000
```

Other commands:

```bash
npm run build      # production build (also checks for errors)
npm run start      # run the production build
npm run typecheck  # TypeScript check only
```

## Edit your content

All text lives in **one file**: `src/data/profile.ts`

- `profile` — name, title, location, about text, **email** (replace the placeholder), phone, social links
- `skills` — skills list and category (Industry Knowledge / Tools & Technologies)
- `experience` — jobs; edit `highlights` to add your real achievements
- `stats` — the numbers shown in the About section

To change the photo, replace `public/profile.jpg` (square image, at least 400×400 px works best).

## Folder structure

```
mohsin-portfolio/
├── public/
│   └── profile.jpg          # profile photo
├── src/
│   ├── app/
│   │   ├── layout.tsx       # HTML shell, fonts, SEO metadata
│   │   ├── page.tsx         # home page (puts all sections together)
│   │   ├── not-found.tsx    # 404 page
│   │   └── globals.css      # colours, base styles, buttons
│   ├── components/          # each section + its .module.css
│   │   ├── Navbar.tsx       # sticky nav + mobile menu
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx       # filterable skills (All / Industry / Tools)
│   │   ├── Experience.tsx   # timeline, auto-calculated duration
│   │   ├── Contact.tsx      # validated form (opens email app)
│   │   └── Footer.tsx
│   ├── data/profile.ts      # ALL content — edit here
│   └── lib/duration.ts      # "2 yrs 10 mos" calculator
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Change colours

Edit the variables at the top of `src/app/globals.css` (`--accent`, `--accent-2`, `--bg`, ...).

## Deploy

Push the folder to GitHub and import it on Vercel or Netlify. After deploying, set the
environment variable `NEXT_PUBLIC_SITE_URL` to your live URL (used for link previews).
