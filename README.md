# L'AgorA — Saint-Fortunat, 2010–2014

Site-archive de L'AgorA (anciennement Le Donjon, grandeur nature), 81 route 263, Saint-Fortunat, Québec.
Astro 5, statique, déployé sur Cloudflare Pages (ag0ra.pages.dev / ag0ra.org).

- `src/pages/` : accueil, histoire, le-donjon, le-lieu, mission, chronologie, evenements, photos, videos, voix, apres, archives
- `public/img/` : photos web (1400 px max, métadonnées retirées)
- `public/video/` : quatre clips ré-encodés (H.264, ≤ 17 Mo)
- `public/archives/` : copies des sites ledonjon.ca (2010–2011) et ag0ra.org (2013), faits avec iWeb
- `public/docs/` : la brochure de 2013

Build : `npm install && npm run build` (sortie dans `dist/`).
