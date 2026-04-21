# Export Pole Dance Studio pour Oxygen Builder 6.0

Structure : **Templates Oxygen pour header et footer** + chaque page autonome avec son HTML/CSS/JS.

## Structure

```
oxygen-export/
├── head.html                 ← Google Fonts (à mettre dans <head> global Oxygen)
├── template/
│   ├── header.html           ← Oxygen > Template Header
│   ├── header.css
│   ├── header.js             (burger menu)
│   ├── footer.html           ← Oxygen > Template Footer
│   ├── footer.css
│   └── footer.js             (newsletter stub)
└── pages/
    ├── home.html + home.css + home.js           ← Code Block page Accueil
    ├── ecole.html + ecole.css + ecole.js
    ├── planning.html + planning.css + planning.js
    ├── stages.html + stages.css + stages.js
    ├── news.html + news.css + news.js
    └── contact.html + contact.css + contact.js
```

Chaque page contient **tout son CSS autonome** (tokens, typo, boutons, hero, sections, cards, responsive — tout sauf nav et footer).

---

## Étape 1 — Google Fonts (une fois)

Oxygen > **Settings > Global Settings > Custom Scripts > Header** → coller `head.html`.

---

## Étape 2 — Template Header (une fois)

1. Oxygen > **Templates > Header** (ou créer une Template "Header" appliquée à toutes les pages)
2. Ajouter un **Code Block** :
   - Onglet PHP/HTML : `template/header.html`
   - Onglet CSS : `template/header.css`
   - Onglet JavaScript : `template/header.js`
3. **Save**

## Étape 3 — Template Footer (une fois)

1. Oxygen > **Templates > Footer**
2. Ajouter un **Code Block** :
   - Onglet PHP/HTML : `template/footer.html`
   - Onglet CSS : `template/footer.css`
   - Onglet JavaScript : `template/footer.js`
3. **Save**

---

## Étape 4 — Les 6 pages (une par une)

Pour chaque page WordPress (Accueil, École, Planning, Stages, News, Contact) :

1. **Pages > Add New** avec le bon slug :
   - Accueil → définir comme page d'accueil dans Réglages > Lecture
   - École → `ecole`
   - Planning → `planning`
   - Stages → `stages`
   - News → `news`
   - Contact → `contact`
2. Ouvrir avec **Oxygen** (les templates Header + Footer s'appliquent déjà)
3. Ajouter un **Code Block** dans la zone de contenu
4. Remplir les 3 onglets :
   - PHP/HTML : `pages/[page].html`
   - CSS : `pages/[page].css`
   - JavaScript : `pages/[page].js`
5. **Save**

---

## Déjà fait

- ✅ URLs images/vidéo en `poledancestudio.fr/wp-content/uploads/2026/04/...` (`.webp` pour images)
- ✅ Liens internes en slugs WP (`/`, `/ecole/`, `/planning/`, etc.)
- ✅ Classe `is-active` sur "Accueil" dans header.html (visuel seulement sur la home, à gérer dynamiquement côté template si besoin)

## Notes

- Les **polices Sora/Inter/Work Sans** doivent être chargées via `head.html` (étape 1). Sans ça : police système.
- **Responsive** : breakpoints 1200/900/640/480px. Mobile-first.
- **Accessibilité** : `prefers-reduced-motion`, `:focus-visible`, `aria-expanded` sur burger.
- **CSS dupliqué par page** (~850 lignes dans chaque `.css`) : voulu, pour que chaque page soit 100% autonome et s'affiche correctement même si une autre page casse.
