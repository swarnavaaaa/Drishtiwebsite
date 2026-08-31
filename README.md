# Netwerked — Drishti Bagla Portfolio

Bespoke single-page portfolio website for **Drishti Bagla**, founder of **netwerked** (LinkedIn Personal Branding & Growth Studio for Founders and Leaders).

## Brand & Aesthetic System
- **Warm Base**: `#FAF8F3` (Cream) / `#1C1C1A` (Warm Charcoal)
- **Primary Accent**: `#1E4638` (Deep Forest Green)
- **Secondary Accent**: `#6E9B85` (Sage Mid-tone)
- **Subtle Tint**: `#CFE3D8` (Pale Mint)
- **Display Serif**: `Fraunces` / `Newsreader`
- **Body Grotesk**: `Plus Jakarta Sans`

## Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (sparingly & purposefully)

## Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Vercel Deployment
This repository is configured for zero-config Vercel deployment:
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Config file: `vercel.json` included with SPA rewrite rules.
