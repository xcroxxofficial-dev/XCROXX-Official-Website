# XCroxx — Universal Shoes Industries

A premium company profile website for a footwear manufacturer, built with React 19, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to the `dist/` folder, ready to deploy to any static host (Netlify, Vercel, cPanel, etc.).

## Project structure

```
src/
  components/   Shared UI: Navbar, Footer, section heading, counters, loader
  sections/     One component per homepage section (Hero, About, Products, ...)
  data/         Content data (products, gallery, testimonials, FAQ, etc.)
  constants/    Site-wide constants (company info, nav links)
  index.css     Tailwind base + global utility classes
  App.jsx       Assembles all sections
```

## Customizing

- **Company details, phone, email, address**: edit `src/constants/site.js`.
- **Images**: all photography is royalty-free Unsplash placeholder imagery referenced by URL in `src/data/*.js`. Replace these URLs with your own factory/product photography before launch (host images in `src/assets` or your CDN).
- **Colors**: brand tokens live in `tailwind.config.js` under `theme.extend.colors` (ink, charcoal, red, gold, surface).
- **Fonts**: Poppins (headings) and Inter (body), loaded via Google Fonts in `index.html`.
- **Contact form**: currently opens the visitor's email client with a pre-filled message (no backend). Wire it to a form service (Formspree, EmailJS, or your own API endpoint) for production use.

## Notes

- Fully responsive from mobile to desktop.
- Scroll-reveal, hover and page-load animations via Framer Motion; motion is reduced automatically for users with `prefers-reduced-motion` enabled.
- Lightbox gallery, animated counters, accordion FAQ and testimonial slider are all built from scratch (no extra UI library dependency).
