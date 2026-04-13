# Changelog — Refonte selon PLAN_REFONTE.md

## Refonte visuelle complète (langage "Dancer")

Application du PLAN_REFONTE.md section par section. Aucun changement de contenu texte, aucune nouvelle image.

### Fichiers modifiés

| Fichier | Changements |
|---|---|
| `assets/css/style.css` | Réécriture complète : tokens section 1, composants section 4, sections section 3. Retrait total des serif. |
| `assets/js/main.js` | Mis à jour pour les nouveaux sélecteurs `.nav__burger` / `.nav__links`. |
| `index.html` | Réécriture selon l'ordre d'exécution section 7. |
| `ecole.html` | Header/footer unifiés, split Amandine avec chips, stats, bloc studio. |
| `planning.html` | Header/footer unifiés, course-cards, pricing, CTA. |
| `stages.html` | Header/footer unifiés, panels 01/02, course-cards, CTA. |
| `news.html` | Header/footer unifiés, news grid, CTA. |
| `contact.html` | Header/footer unifiés, contact-grid, form, CTA. |

### Design tokens (section 1)

- `--bg` passe de `#1d2024` à `#000000` (noir pur)
- `#1d2024` devient `--surface-1`, nouveau `--surface-2: #13151a`
- `--accent: #e5b2ff` conservé
- Fonts : **Sora** (display), **Inter** (body + italiques), **Work Sans** (accent)
- **Retrait total d'Instrument Serif / toute serif** — la règle #1 du plan
- Échelle typo fluide via `clamp()` : `--h1`, `--h2`, `--marquee`, `--eyebrow`

### Composants clés

- `.btn` avec variantes `--primary`, `--ghost`, `--outline` + `.btn__dot` (pastille lavande 6px)
- `.eyebrow` — chip uppercase avec bordure fine
- `.feature-card` — photo en fond + overlay + numéro italique accent en haut-gauche
- `.course-card` — fond `--surface-1` + gros numéro italique accent
- `.stat__num` — grands chiffres Sora 600
- `.chip` — pills bordées pour formations
- `.testimonial` — avatar rond bordé, grande apostrophe décorative
- `.marquee` avec `.marquee__word--outline` (stroke blanc)

### Sections section 3

| # | Section | Implémentation |
|---|---|---|
| 3.1 | Header | Sticky, backdrop-blur, bouton Réserver avec pastille |
| 3.2 | Hero | Grid 3-colonnes : photo gauche \| titre+CTA \| photo droite. Responsive 1-col sous 900px. |
| 3.3 | Marquee | Pattern réutilisable, 3 occurrences + 1 pre-footer, Inter italic bold, alternance fill/outline |
| 3.4 | Pourquoi | 3 `.feature-card` avec photo de fond + overlay + num 01/02/03 |
| 3.5 | Nos cours | 4 `.course-card` sur `--surface-1`, num italique accent 3rem |
| 3.6 | Stages | 4 `.feature-card--events` avec tag en haut-gauche |
| 3.7 | Stats | `.stats` sur `--surface-2`, 2-cols text+figures, séparateurs verticaux |
| 3.8 | Portrait | `.split` 50/50, photo 3/4 + chips formations |
| 3.9 | Témoignages | 3 `.testimonial` avec avatars ronds et guillemet décoratif |
| 3.10 | CTA final | Fond photo + overlay 65%, bouton `.btn--outline` |
| 3.11 | Pre-footer | Marquee outline opacity 0.6, puis footer 4 colonnes |

### Checklist section 6

- [x] Aucune police serif visible — seulement Sora / Inter / Work Sans
- [x] Mots italiques en `#e5b2ff`
- [x] 3 marquees home avec alternance accent/outline
- [x] Cards "Pourquoi" ont photo de fond + overlay
- [x] Hero avec 2 photos latérales
- [x] Bouton "Réserver" avec pastille violette (`.btn__dot`)
- [x] Avatars témoignages ronds
- [x] Aucun `box-shadow` visible sur les cards
- [x] Footer avec marquee "Pole Dance Tours — Rochecorbon" au-dessus
- [x] `--section-y: clamp(80px, 12vw, 160px)`
- [x] Responsive jusqu'à 360px (breakpoints 640/900/1200)
- [x] Fonts preconnect + images avec `width`/`height`
