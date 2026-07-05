# Entity Ethereal

Premium marketing website for Entity Ethereal, a physical-to-digital campaign intelligence company focused on tracked print, intentional engagement, CRM routing, analytics, and closed-loop attribution.

## Stack

- Vite
- React
- TypeScript
- CSS design tokens
- Lucide React icons

The original workspace is a Vite app, so the site is implemented as a static-friendly React frontend with route-aware pages instead of migrating the project to Next.js.

## Routes

- `/`
- `/services`
- `/platform`
- `/use-cases`
- `/early-adopter`
- `/contact`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

The build output is generated in `dist/` and can be deployed to a static host. `public/_redirects` routes all paths back to `index.html` so direct visits to nested pages work on hosts such as Cloudflare Pages or Netlify.

## Forms

The contact and early-adopter forms are UI-only for launch. Submissions are logged to the browser console with a TODO marker for future backend or CRM integration.

## Brand Notes

Core positioning:

- Called, not caught.
- Tracked physical print → digital omnichannel → closed-loop attribution.
- No guesswork. No surveillance. Just invitation.
- No tracking without a tap. No data without intent.
