# adityahanif.github.io

Aditya Hanif's personal website — live at https://adityahanif.github.io/

A single static page in pure HTML + CSS + vanilla JavaScript (no framework, no build step), in English, with a black & white theme (dark by default, inverted automatically in light mode via `prefers-color-scheme`):

- **Hero** — name, roles (Data Science • Web Tools Builder • Digital Marketing), social links
- **About** — background and working approach
- **Skills** — skill chips
- **Portfolio** — 8 original projects (no forks) with a category filter (Web Apps / Desktop / Data / Tools & Extensions) and verified live-demo / GitHub links
- **Contact** — email and LinkedIn

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html   → all content (portfolio is written directly in HTML so it renders without JS)
style.css    → all styling
script.js    → footer year, mobile menu, portfolio filter
```

Note: bump the `?v=` query on `style.css` / `script.js` in `index.html` whenever those files change, so visitors' browsers don't serve a stale cached copy from GitHub Pages.
