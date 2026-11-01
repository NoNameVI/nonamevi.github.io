# Nguyễn Minh Thức — Portfolio

Bilingual (Vietnamese / English) Java Backend portfolio, built as a static slide presentation for GitHub Pages.

## Local preview

Run `python -m http.server 8000` in this directory and visit `http://localhost:8000`.

## Publish

In **Settings → Pages**, select **Deploy from a branch**, `main`, and `/ (root)`. The public URL is `https://nonamevi.github.io/`.

## Maintain

- `index.html`: PowerPoint-inspired presentation shell and six content slides.
- `assets/presentation.css`: light UI, responsive layout, and Morph-like transitions.
- `assets/presentation.js`: slide navigation, VI/EN translations, clipboard actions, and slide-show mode.
- `assets/images/`: portrait and project artwork.
- `assets/cv/`: downloadable one-page CVs.

No build step is required. Bootstrap 5.3 is loaded from a CDN; the custom stylesheet also supplies the core layout. Keep descriptions aligned with the linked project repositories and avoid publishing secrets or unverifiable metrics.

The AURA shopping bag/shoe and numbered T block are symbolic CSS illustrations, not project screenshots. The original project artwork and portrait remain in `assets/images/` for reference and social previews.
