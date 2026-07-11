# Entity Ethereal

Production marketing website for Entity Ethereal, a physical-to-digital campaign intelligence company focused on intentional print engagement, QR/PURL/NFC signal identity, journey routing, CRM handoff, analytics and closed-loop attribution.

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

The live launch theme uses a light ethereal/technical palette, a signal-console hero, token-level campaign language, and focused pages for services, platform modules, use cases, early access and contact.

## Launch Notes

- `_redirects` rewrites route paths to `index.html`.
- `_headers` applies security and cache headers.
- `robots.txt`, `sitemap.xml`, Open Graph metadata and a web manifest are included.
- Forms store submissions in browser storage for launch and can be connected to CRM or email routing next.
