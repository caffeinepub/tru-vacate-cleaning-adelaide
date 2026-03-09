# Tru Vacate Cleaning Adelaide

## Current State
Four pages exist: Home, Services, About, Contact. The Home page has hero, trust badges, services grid, FAQ, testimonials, pricing, and CTA. No suburb-specific pages exist yet. App.tsx has routes for /, /services, /about, /contact only.

## Requested Changes (Diff)

### Add
- 10 suburb-specific landing pages (one per Adelaide suburb) with ~400 words of SEO-optimised content each
- Each suburb page: H1 with suburb + vacate cleaning, trust badges, what we clean checklist, pricing section, CTA, internal links to contact/services
- Each suburb page: unique title tag, meta description, and Schema.org LocalBusiness JSON-LD with suburb-specific address
- New route for each suburb: /suburbs/glenelg, /suburbs/norwood, /suburbs/prospect, /suburbs/unley, /suburbs/mitcham, /suburbs/burnside, /suburbs/salisbury, /suburbs/tea-tree-gully, /suburbs/west-torrens, /suburbs/port-adelaide
- SuburbPage.tsx reusable component that accepts suburb data props
- "Areas We Serve" section on Home page with suburb links grid (SEO internal links)

### Modify
- HomePage.tsx: add "Areas We Serve" section with grid of suburb links just before the CTA banner — this provides internal linking for SEO
- App.tsx: add 10 new suburb routes using the SuburbPage component

### Remove
- Nothing removed

## Implementation Plan
1. Create SuburbPage.tsx reusable component that accepts suburb config (name, slug, postcode, description paragraphs, features list)
2. Create suburbs data file with 10 Adelaide suburbs, each with unique 400-word Australian-English active-voice content
3. Register 10 suburb routes in App.tsx
4. Add "Areas We Serve" section to HomePage.tsx with internal links to all 10 suburb pages
5. Each suburb page injects its own title, meta description, and JSON-LD via useEffect
