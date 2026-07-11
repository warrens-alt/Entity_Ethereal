# Entity Ethereal

Production marketing website for Entity Ethereal, a tracked physical print to digital omnichannel company focused on variable-data campaigns, QR/PURL/NFC signal identity, journey routing, CRM handoff, analytics and closed-loop attribution.

## Routes

- `/`
- `/services`
- `/platform`
- `/use-cases`
- `/early-adopter`
- `/contact`

## Commands

```bash
npm run build
npm run dev
npm run preview
```

## Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` or blank
- Production branch: `main`

The site is intentionally dependency-free for launch reliability. Root files are also valid static assets, so the site can still render if a host serves the repository root directly.

## Theme

The live launch theme follows the "Called, not caught." positioning from the WhatsApp brief: Ghost White, Data Indigo, Phantom Lavender and Quantum Teal, with a signal-console hero and practical service packages available before the automated platform launches.

## Launch Notes

- `_redirects` rewrites route paths to `index.html`.
- `_headers` applies security and cache headers.
- `robots.txt`, `sitemap.xml`, Open Graph metadata and a web manifest are included.
- Forms store submissions in browser storage for launch and can be connected to CRM or email routing next.
