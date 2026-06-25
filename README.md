# Building Findable Websites — companion site (archive)

This repository is a preserved, static archive of the companion website for the book
**[Building Findable Websites: Web Standards, SEO, and Beyond](https://www.amazon.com/exec/obidos/ASIN/0321526287/aarronwalterc-20/)**
by Aarron Walter (New Riders, 2008).

It was migrated off paid GoDaddy hosting to free static hosting on
[Vercel](https://vercel.com) in June 2026 so the material stays available for readers
who still reference it. The site is intentionally kept **as it was** — only dead
infrastructure was removed (see "What was cleaned up" below). The content, layout, and
URLs are otherwise unchanged.

## What's here

| Path | Purpose |
| --- | --- |
| `index.html` … `feedback.html` | The eight original pages (Home, Table of Contents, Findability Checklist, Bonus Chapters, Code, Resources, Events, Share Feedback). |
| `an-event-apart/` | A self-contained S5 slide presentation that was published alongside the site. |
| `c/`, `js/`, `i/` | Stylesheets, JavaScript, and images. |
| `d/` | Downloadable assets — bonus chapter PDFs, source-code zips, and the findability checklist. |
| `robots.txt`, `sitemap.xml` | Preserved (sitemap URLs updated to HTTPS). |
| `vercel.json` | Vercel config. Rewrites the original `*.php` URLs (printed in the book) to the static `*.html` files so no in-book link breaks. |

## Why the pages are `.html` but the URLs end in `.php`

The original site was PHP-templated, so its public URLs end in `.php`
(e.g. `/table-of-contents.php`) — and those URLs are **printed in the book**. The pages
are now plain static HTML, but `vercel.json` rewrites each `*.php` request to its
`*.html` file, so every URL that appears in the book continues to resolve.

## What was cleaned up

A "light cleanup" pass removed only dead, non-visible infrastructure:

- **Google Analytics** — the legacy `urchin`/`ga.js` tracker (long defunct).
- **`fancy-type.css`** — a stylesheet `<link>` that was already a soft-404 on the
  original server (the file never existed).
- **ShareThis widget** — an `http://` script that modern browsers block as
  mixed-content on an HTTPS site.
- **Defunct social widgets** — the old Facebook group link and the dead
  digg / StumbleUpon / Facebook "share this page" buttons.

The many dead **external resource links** (2008-era tools, blogs, and services that no
longer exist) were deliberately **left in place** — they are part of the historical
snapshot. See `BROKEN-LINKS.md` for a full report.

## Local preview

```bash
python3 -m http.server 8731
# then open http://localhost:8731/
```

Note: the `*.php` → `*.html` rewrites only apply on Vercel, so when previewing locally,
open the `.html` files directly (e.g. `/table-of-contents.html`).

## Hosting

Static site, no build step. Deployed on Vercel from this repo's `main` branch.
