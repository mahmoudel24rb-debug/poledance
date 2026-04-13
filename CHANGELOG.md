# Changelog

## Passe 4 — Optimisation responsive mobile

Application de `PROMPT_PASSE_4.md` en un seul commit. Aucun changement desktop, aucune modif HTML — tout se joue dans `assets/css/style.css`.

**Méthode suivie :** tokens `:root` d'abord, puis règles base (`.btn`, `.nav-wrap`), puis fusion dans les blocs `@media` existants (aucun doublon de breakpoint), puis ajout du bloc `@media (max-width: 480px)` neuf.

- **Tokens `:root`** : `--h1` min 2.5rem, `--h2` min 1.75rem, `--marquee` min 3rem, `--gutter` min 20px, `--section-y` min 64px pour un rythme mobile plus serré.
- **Règles base** : `.btn { min-height: 44px }` (tap target Apple HIG), `.nav-wrap { padding-top: env(safe-area-inset-top) }` pour le notch iOS.
- **`@media (max-width: 900px)`** (fusion) : hero 1 colonne avec uniquement l'image droite (`.hero__side--left { display: none }`), nav 64px + logo réduit, stats 3 cols horizontales + `border-top` au lieu de `border-left`, section-head compacté, split portrait aspect 4/5. Règle `.grid--stages-2x2` inline déplacée dans ce bloc pour éliminer le doublon 900px.
- **`@media (max-width: 640px)`** (fusion) : feature-cards `aspect-ratio: 5/4`, course-cards padding 24px + `min-height: 0`, testimonials padding 24px, contact-form `font-size: 16px` + `min-height: 48px`, newsletter empilée verticalement, footer compact, CTA h2 adapté, marquees 28s.
- **`@media (max-width: 480px)`** (nouveau) : hero CTAs en colonne pleine largeur, stats passent en 1 colonne avec chiffre 14vw.
- **Validation** : agent Playwright headless testé sur `index.html`, `ecole.html`, `planning.html`, `contact.html` aux viewports iPhone SE 375×667, iPhone 14 Pro 393×852, Galaxy S22 360×780. Aucun scroll horizontal. Screenshots dans `.test-screenshots/`. Tous les critères de la checklist section 6 validés.
- **Décision** : bloc `@media (max-width: 900px)` inline pour `.grid--stages-2x2` supprimé (ligne 356) et fusionné dans le bloc principal pour respecter la consigne "ne PAS dupliquer les blocs".

---

## Passe 3 — Finition (polish visuel, perf, SEO, a11y)

Application de `PROMPT_PASSE_3.md` en 3 commits. Objectif : ~95% fidélité vs Dancer + bases SEO/a11y/perf solides.

- **Polish visuel** : hero title `<br>`, CTA h2 `clamp(3rem, 8vw, 7rem)`, stats labels uppercase, prefoot opacity 0.75, section Stages en grille 2×2 (home uniquement).
- **Performance** : `loading="lazy"` + `decoding="async"` sur images hors-viewport, `fetchpriority="high"` sur hero, preload font Sora, dimensions explicites ajoutées sur l'image planning.
- **SEO** : Open Graph + Twitter Card + canonical sur les 6 pages, Schema.org SportsActivityLocation sur `index.html` et `contact.html`.
- **A11y** : `:focus-visible` lavande, `aria-expanded`/`aria-controls` sur burger menu + JS synchro, `aria-label` sur nav principale, `aria-hidden` sur `.btn__dot`, support `prefers-reduced-motion`.
- **Décision** : URL canonique et OG pointent sur `https://mahmoudel24rb-debug.github.io/poledance/` (GH Pages actuel, à remplacer quand `poledancetours.fr` sera en prod).

---

# Refonte selon PLAN_REFONTE.md

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
