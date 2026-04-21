# Export Pole Dance Studio pour Oxygen Builder 6.0

Ce dossier contient les 6 pages du site au format « Code Block Oxygen ».

## Structure

```
oxygen-export/
├── head.html           ← À coller UNE FOIS dans Oxygen > Header (Google Fonts)
├── home.html + home.css + home.js
├── ecole.html + ecole.css + ecole.js
├── planning.html + planning.css + planning.js
├── stages.html + stages.css + stages.js
├── news.html + news.css + news.js
└── contact.html + contact.css + contact.js
```

Chaque page est autonome : ses 3 fichiers vont dans les 3 onglets d'un Code Block Oxygen.

---

## Étape 1 — Polices Google Fonts (une seule fois, globalement)

1. Oxygen > **Settings** > **Global Settings** > **Custom Scripts** > onglet **Header**
2. Colle le contenu de `head.html`

> Alternative : **Settings** > **Code Snippets** > **Header** (Oxygen 6.0)

Si tu ne fais pas cette étape, les polices Sora/Inter/Work Sans ne se chargeront pas et le rendu sera en police système par défaut.

---

## Étape 2 — Uploader les médias

Upload tous les fichiers de `assets/images/` (+ la vidéo `hero-video.mp4`) dans la **Médiathèque WordPress**. Note l'URL de chaque fichier uploadé, tu en auras besoin à l'étape 4.

Fichiers à uploader :
- `amandine-portrait-ecole.jpg`
- `amandine-portrait-home.jpg`
- `home-cours-pole-dance.jpg`
- `studio-parc-beauregard.jpg`
- `logo-square-300.png`
- `planning-2025-2026.png`
- `hero-video.mp4`

---

## Étape 3 — Créer les pages dans WordPress

Pour chaque page (Accueil, École, Planning, Stages, News, Contact) :

1. **Pages > Add New** dans WordPress
2. Ouvrir avec **Oxygen**
3. Cliquer **+ Add** > chercher **Code Block** > l'ajouter à la page
4. Ouvrir le Code Block :
   - Onglet **PHP/HTML** → coller le contenu de `[page].html`
   - Onglet **CSS** → coller le contenu de `[page].css`
   - Onglet **JavaScript** → coller le contenu de `[page].js`
5. **Save**

---

## Étape 4 — Remplacer les chemins d'images

Dans chaque fichier `.html`, remplace les chemins `assets/images/xxx.jpg` par les URLs WordPress récupérées à l'étape 2.

**Exemple** :
```html
<!-- Avant -->
<img src="assets/images/amandine-portrait-home.jpg" ...>

<!-- Après -->
<img src="https://ton-site.fr/wp-content/uploads/2026/04/amandine-portrait-home.jpg" ...>
```

Liste des chemins à remplacer dans chaque page :
- `assets/images/logo-square-300.png` (dans nav + footer, toutes les pages)
- `assets/images/hero-video.mp4` (dans home.html uniquement)
- `assets/images/home-cours-pole-dance.jpg`
- `assets/images/amandine-portrait-home.jpg`
- `assets/images/amandine-portrait-ecole.jpg`
- `assets/images/studio-parc-beauregard.jpg`
- `assets/images/planning-2025-2026.png` (dans planning.html uniquement)

**Raccourci** : utilise Ctrl+H dans ton éditeur de texte pour remplacer `assets/images/` par ton URL WordPress avant de coller dans Oxygen.

---

## Étape 5 — Liens entre pages

Les liens internes utilisent `href="ecole.html"`, `href="planning.html"`, etc. Remplace-les par les slugs WordPress de tes pages :

```html
<!-- Avant -->
<a href="ecole.html">L'école</a>

<!-- Après -->
<a href="/ecole/">L'école</a>
```

À remplacer dans chaque page :
- `ecole.html` → `/ecole/`
- `planning.html` → `/planning/`
- `stages.html` → `/stages/`
- `news.html` → `/news/`
- `contact.html` → `/contact/`
- `index.html` → `/` (racine)

---

## Notes techniques

### CSS dupliqué
Le même CSS est dans les 6 fichiers `.css` (par design, selon la demande : chaque page autonome). Si tu veux mutualiser plus tard : extraire le CSS commun dans **Oxygen > Manage > Stylesheets** et retirer le contenu des onglets CSS de chaque Code Block.

### JavaScript
Le JS gère :
- Le burger menu mobile
- La fermeture auto du menu au clic sur un lien
- L'envoi simulé du formulaire de contact (à brancher à un vrai endpoint plus tard)

### Accessibilité
- `prefers-reduced-motion` respecté (pas d'animations si l'utilisateur a désactivé)
- `:focus-visible` avec outline violet
- `aria-expanded` sur le burger menu

### Responsive
Breakpoints : 1200px / 900px / 640px / 480px. Mobile-first optimisé.

---

## Contenu des pages

| Fichier | Page |
|---|---|
| `home.html` | Accueil avec hero vidéo, 3 cartes « Pourquoi », 4 cours, feature Amandine, témoignages, CTA |
| `ecole.html` | Bio Amandine, stats, infos studio |
| `planning.html` | Image planning, 4 cours, tarifs (abonnements + cartes) |
| `stages.html` | Stages intensifs + camps 4 jours + programme |
| `news.html` | Grille Instagram + newsletter |
| `contact.html` | Formulaire + coordonnées + FAQ |
