# Export Pole Dance Studio pour Oxygen Builder 6.0

Structure avec **Template globale** (header + footer + base partagés) et **6 pages** autonomes.

## Structure

```
oxygen-export/
├── head.html                 ← Google Fonts (à mettre dans <head> global Oxygen)
├── template/
│   ├── header.html           ← Nav HTML
│   ├── header.css            ← CSS spécifique nav (sticky, burger, responsive)
│   ├── header.js             ← Burger menu toggle
│   ├── footer.html           ← Footer HTML
│   ├── footer.css            ← CSS spécifique footer (grid, newsletter)
│   ├── footer.js             ← Newsletter form stub
│   ├── base.css              ← CSS partagé (tokens, typo, boutons, sections, cards)
│   └── base.js               ← Contact form stub
└── pages/
    ├── home.html             ← Contenu page Accueil (sans header/footer)
    ├── ecole.html
    ├── planning.html
    ├── stages.html
    ├── news.html
    └── contact.html
```

---

## Étape 1 — Google Fonts

Oxygen > **Settings > Global Settings > Custom Scripts > Header** → coller `head.html`.

---

## Étape 2 — Créer la Template globale

1. Oxygen > **Templates > Add New** → nom `Main Template`
2. **Apply to** : All Pages
3. Dans la template, ajouter dans l'ordre :
   - **Code Block 1 — HEADER**
     - Onglet PHP/HTML : `template/header.html`
     - Onglet CSS : `template/header.css`
     - Onglet JavaScript : `template/header.js`
   - **Inner Content** (l'élément Oxygen qui injecte le contenu de chaque page)
   - **Code Block 2 — FOOTER**
     - Onglet PHP/HTML : `template/footer.html`
     - Onglet CSS : `template/footer.css`
     - Onglet JavaScript : `template/footer.js`
4. Ajouter un **Code Block 3 — BASE** (peut être placé n'importe où dans la template, son HTML sera vide) :
   - Onglet PHP/HTML : laisser vide
   - Onglet CSS : `template/base.css` (le gros CSS partagé : tokens, typo, boutons, toutes les sections, toutes les cards, responsive, a11y)
   - Onglet JavaScript : `template/base.js` (contact form stub)
5. **Save**

> Alternative plus propre pour `base.css` : **Oxygen > Manage > Stylesheets > Add New** → y coller `base.css`. Ça évite d'avoir un Code Block vide juste pour porter le CSS.

---

## Étape 3 — Créer les 6 pages

Pour chaque page (Accueil, École, Planning, Stages, News, Contact) :

1. **Pages > Add New** avec le bon slug :
   - Accueil → définir comme page d'accueil (Réglages > Lecture)
   - École → `ecole`
   - Planning → `planning`
   - Stages → `stages`
   - News → `news`
   - Contact → `contact`
2. Ouvrir avec **Oxygen** (la template Main s'applique déjà, le header + footer sont là)
3. Ajouter un **Code Block** dans l'Inner Content
4. Onglet PHP/HTML : coller `pages/[nom-page].html`
5. Onglets CSS et JS : **vides** (tout est dans la template)
6. **Save**

---

## Déjà fait dans l'export

- ✅ URLs images/vidéo en `poledancestudio.fr/wp-content/uploads/2026/04/...` (formats `.webp` pour images)
- ✅ Liens internes en slugs WP (`/`, `/ecole/`, `/planning/`, `/stages/`, `/news/`, `/contact/`)
- ✅ Classe `is-active` sur lien "Accueil" dans header (à gérer dynamiquement si tu veux l'effet visuel sur chaque page — demande-moi)

## Notes

- Les **polices** (Sora/Inter/Work Sans) doivent être chargées via `head.html` (étape 1). Sans ça, tout passe en police système.
- **Responsive** : breakpoints 1200/900/640/480px.
- **Accessibilité** : `prefers-reduced-motion`, `:focus-visible`, `aria-expanded` sur burger.
- **Performance** : lazy loading sur images hors viewport, fetchpriority high sur hero, preload Sora.
