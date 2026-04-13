# Pole Dance Tours — maquette site

Maquette statique multi-pages pour la refonte de [poledancetours.fr](https://poledancetours.fr/).
adaptée au contenu et aux images de Pole Dance Tours.

## Stack

- HTML / CSS / JS vanilla — **aucune dépendance, aucun build**
- Police : Bricolage Grotesque + Inter (Google Fonts)
- Compatible **GitHub Pages**, Netlify, Vercel, OVH, etc.

## Pages

| Fichier | Page |
|---|---|
| `index.html` | Accueil (hero, intro, pourquoi, Amandine, témoignages, CTA) |
| `ecole.html` | L'école (bio Amandine, studio Parc Beauregard) |
| `planning.html` | Planning, cours et tarifs |
| `stages.html` | Stages intensifs et camps 4 jours |
| `news.html` | Placeholder Instagram (à brancher en API plus tard) |
| `contact.html` | Coordonnées + formulaire (front-end uniquement) |

## Aperçu local

Ouvre simplement `index.html` dans ton navigateur, ou lance un petit serveur :

```bash
# Python 3
python -m http.server 8080
# puis http://localhost:8080
```

## Déploiement sur GitHub Pages

1. Push le dossier `site/` (ou son contenu) sur un repo GitHub.
2. **Settings → Pages** → branche `main`, dossier `/site` (ou `/`).
3. GitHub publie l'URL automatiquement.

## À brancher en production

- **Bouton « Réserver »** : pointer vers la plateforme de réservation (actuellement `#`).
- **Formulaire de contact** : brancher un service (Formspree, Netlify Forms, EmailJS) — l'envoi est simulé en JS pour le moment.
- **Newsletter** : idem (Brevo, Mailchimp…).
- **Page News** : intégrer le widget Instagram ou un service comme [Behold](https://behold.so/) / [SnapWidget](https://snapwidget.com/).
- **Liens Facebook / YouTube** du footer (actuellement `#`).
- **Mentions légales / Cookies / Vie privée** dans le footer.

## Personnalisation rapide

Toutes les couleurs et typos sont des variables CSS en haut de `assets/css/style.css` :

```css
:root {
  --bg: #0b0710;            /* fond */
  --accent: #e6266c;        /* magenta principal */
  --gradient: linear-gradient(135deg, #ff3a85, #e6266c, #7a1bd6);
  --font-display: "Bricolage Grotesque", ...;
  --font-body: "Inter", ...;
}
```

## Structure

```
site/
├── index.html
├── ecole.html
├── planning.html
├── stages.html
├── news.html
├── contact.html
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/   (logo, portraits, studio, planning, etc.)
```
