# Nguyễn Minh Thức — Portfolio

Bilingual (Vietnamese / English) Java Backend portfolio. The main page presents Markdown content in a Word-inspired reading interface; the earlier PowerPoint presentation remains available at `/slides.html`.

## Local preview

Run `python -m http.server 8000` in this directory and visit `http://localhost:8000`.

## Publish

In **Settings → Pages**, select **Deploy from a branch**, `main`, and `/ (root)`. The public URL is `https://nonamevi.github.io/`.

## Maintain

- `index.html`: Word-inspired main portfolio, including page navigation and reading controls.
- `portfolio.vi.md` and `portfolio.en.md`: the portfolio text for each language.
- `assets/word-demo.css` and `assets/word-demo.js`: document layout, Markdown rendering, VI/EN switching, and toolbar interactions.
- `assets/word-icons.svg`: source for the Word-inspired vector icons.
- `slides.html`: earlier PowerPoint-inspired presentation with six slides.
- `assets/presentation.css` and `assets/presentation.js`: slide layout, navigation, and Morph-like transitions.
- `assets/images/`: portrait and project artwork.
- `assets/cv/`: downloadable one-page CVs.
- `word-demo.html`: redirects older demo links to the main portfolio.

GitHub's Markdown viewer shows the raw document without the Word-style toolbar. Visitors open `index.html` for that interface. After editing either Markdown file or `assets/word-icons.svg`, run `node scripts/build-word-demo-bundle.mjs`. The generated bundle lets `index.html` display its content and icons when opened directly with `file://`; the hosted page reads the `.md` files normally.

No build step is required beyond regenerating the offline content bundle after source edits. The slide presentation loads Bootstrap 5.3 from a CDN. Keep descriptions aligned with the linked project repositories and avoid publishing secrets or unverifiable metrics.

The AURA shopping bag/shoe and numbered T block are symbolic CSS illustrations, not project screenshots. The original project artwork and portrait remain in `assets/images/` for reference and social previews.
