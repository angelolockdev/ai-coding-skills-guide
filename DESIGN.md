---
name: AI Coding Skills Guide
description: Landing page vitrine pour un workflow de codage avec l'IA en 5 skills
colors:
  ink-black: "#050505"
  surface-dark: "#0a0a0a"
  text-primary: "#fafafa"
  text-dim: "#a1a1a1"
  text-muted: "#525252"
  accent-emerald: "#10b981"
  accent-emerald-hover: "#34d399"
  accent-soft: "#10B9810F"
  purple: "#a78bfa"
  orange: "#fb923c"
  blue: "#60a5fa"
  red: "#f87171"
  border-subtle: "#FFFFFF14"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  body-small:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.15em"
  mono:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  pill: "999px"
  card: "1.5rem"
  md: "0.75rem"
  sm: "0.375rem"
spacing:
  xs: "0.375rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "2.5rem"
  3xl: "4rem"
  4xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-emerald}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-emerald-hover}"
  button-ghost:
    backgroundColor: "#FFFFFF0A"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  skill-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-dim}"
    rounded: "{rounded.card}"
    padding: "2rem"
  chip-tag:
    backgroundColor: "#FFFFFF0A"
    textColor: "{colors.text-dim}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.625rem"
---

# Design System: AI Coding Skills Guide

## 1. Overview

**Creative North Star: "L'Atelier"**

Le système visuel évoque l'établi d'un développeur senior : un espace sombre, propre, où chaque outil a sa place et où la lumière tombe sur le travail, pas sur le décor. La profondeur vient des contrastes de surface et d'un glow radial subtil, jamais d'ombres portées. L'émeraude est le seul signal coloré — il marque l'action et la confiance, le reste est encre neutre.

Le système rejette explicitement trois choses, tirées de PRODUCT.md : le SaaS générique 2023 (cards identiques, eyebrow sur chaque section, texte en gradient, hero-métriques), la documentation austère (mur de texte sans hiérarchie), et le dev-tool dark cliché (néons partout, glassmorphism décoratif, fausse esthétique terminal). L'Atelier n'est pas un terminal mocké — c'est un espace de travail réel, feutré, où le contenu porte la confiance.

**Key Characteristics:**
- Fond encre quasi-noir, surfaces légèrement relevées par contraste tonal.
- Un seul accent saturé (émeraude) utilisé avec parcimonie sur les actions et les signaux positifs.
- Profondeur par glow radial et bordures fines, jamais par ombres portées.
- Typographie en une seule famille sans-serif (Plus Jakarta Sans) avec un mono (JetBrains Mono) pour le code et les tags.
- Composants confiants et retenus : rayons généreux mais maîtrisés, pas de décoration superflue.

## 2. Colors

Une palette encre + un accent. L'émeraude porte seul la couleur ; les teintes purple/blue/orange/red existent dans les tokens mais restent réservées à un usage futur (data viz, états). Le fond n'est pas un gris teinté chaud — c'est un noir d'encre neutre.

### Primary
- **Émeraude Signal** (`#10b981`) : le seul accent saturé. Marque les CTA primaires, les liens actifs, les puces de workflow, les numéros d'étape. Utilisé sur ≤10% de toute surface donnée — sa rareté est le point.
- **Émeraude Clair** (`#34d399`) : état hover du bouton primaire. Léger lift perceptible, pas de changement de forme.

### Neutral
- **Encre** (`#050505`) : fond de page. Pas un gris, pas un warm-neutral — un noir d'encre quasi-pur.
- **Surface** (`#0a0a0a`) : fond des cartes et blocs. Légèrement relevé par contraste tonal, pas par ombre.
- **Texte Primaire** (`#fafafa`) : titres, corps principal, boutons primaires (sur fond émeraude).
- **Texte Dim** (`#a1a1a1`) : corps secondaire, descriptions, labels de navigation. Contraste AA vérifié sur fond encre.
- **Texte Muet** (`#525252`) : numéros de carte, séparateurs de workflow, copyright. Réservé aux éléments structurels, jamais au corps lisible.
- **Bordure Subtile** (`rgba(255,255,255,.08)`) : bordures de cartes, séparateurs, contours de chips. Toujours blanc à 8%, jamais une couleur teintée.
- **Accent Soft** (`rgba(16,185,129,.06)`) : fond teinté émeraude pour les eyebrows et badges. Très faible saturation.

### Named Rules
**The One Signal Rule.** L'émeraude est utilisé sur ≤10% de toute surface donnée. Sa rareté est le point. Si une seconde couleur saturée apparaît, elle doit gagner sa place par un rôle fonctionnel, pas décoratif.
**The No-Warm-Neutral Rule.** Le fond n'est jamais un gris teinté chaud. C'est un noir d'encre. La « chaleur » du guide vient de l'accent émeraude, de la typographie et du contenu, pas du fond.

## 3. Typography

**Display Font:** Plus Jakarta Sans (avec fallback `system-ui, sans-serif`)
**Body Font:** Plus Jakarta Sans (même famille, poids variés)
**Mono Font:** JetBrains Mono (avec fallback `monospace`)

**Caractère:** Une seule famille sans-serif géométrique-humaniste, déployée en plusieurs poids. Le mono intervient pour le code et les tags, créant un contraste de registre sans ajouter une deuxième famille display. Note critique : les fonts sont déclarées dans les variables CSS mais aucun `@font-face` ou `<link>` ne les charge — elles retombent actuellement sur `system-ui`. À corriger en liant les fonts réelles.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 7vw, 5rem)`, line-height 0.95, letter-spacing -0.04em) : H1 du hero. Une seule occurrence par page.
- **Headline** (700, `clamp(1.875rem, 4vw, 2.75rem)`, line-height 1.1, letter-spacing -0.03em) : titres de section H2.
- **Title** (700, 1.25rem, letter-spacing -0.02em) : titres de cartes H3.
- **Body** (400, 1.0625rem, line-height 1.7) : paragraphe de lede. Max 65–75ch.
- **Body Small** (400, 0.875rem, line-height 1.65) : descriptions de cartes, corps secondaire.
- **Label** (600, 0.6875rem, letter-spacing 0.15–0.2em, uppercase) : eyebrows, tags de section, badges. À utiliser avec parcimonie — pas sur chaque section.
- **Mono** (400, 0.75rem, line-height 1.5) : code d'installation, tags de skill, numéros.

### Named Rules
**The One Family Rule.** Une seule famille sans-serif pour tout le texte display + body. Le mono est le seul contraste de registre. Ne pas introduire une deuxième sans-serif « similaire mais différente ».
**The Letter-Spacing Floor Rule.** Le display ne descend jamais sous -0.04em de letter-spacing. Plus serré et les lettres se touchent.

## 4. Elevation

Le système est **tonal plat par défaut**. Aucune ombre portée n'existe dans le code. La profondeur est conveyed par trois mécanismes :

1. **Glow radial** (`body::before`) : trois gradients radiaux positionnés en haut-gauche, haut-droite et bas-centre, très diffus, à 6–15% d'opacité émeraude/purple/blue. Crée une atmosphère sans structurer l'information.
2. **Contraste de surface** : les cartes (`#0a0a0a`) se détachent du fond (`#050505`) par un delta tonal minimal mais perceptible.
3. **Bordures fines** : `rgba(255,255,255,.08)` sur les cartes, chips et séparateurs. Toujours 1px, toujours blanc translucide.

Le backdrop-blur (`blur(24px)`) apparaît uniquement sur la navigation flottante — c'est fonctionnel (lisibilité du nav par-dessus le contenu scrollé), pas décoratif.

### Named Rules
**The No-Shadow Rule.** Aucune ombre portée nulle part. Pas de `box-shadow` sur les cartes, boutons ou inputs. La profondeur vient du contraste tonal et des bordures.
**The Glow-Is-Atmosphere Rule.** Les glows radiaux créent l'ambiance, ne structurent pas l'information. Si un élément a besoin de se détendre, augmenter le contraste de surface, pas ajouter un glow local.

## 5. Components

### Buttons
- **Shape:** pilule complète (999px).
- **Primary:** fond émeraude (`#10b981`), texte encre (`#050505`), padding `0.875rem 1.5rem`, weight 600, 0.875rem. Hover : fond émeraude clair (`#34d399`) + `transform: scale(.98)` (effet tactile). Transition `0.5s` sur l'easing standard.
- **Ghost:** fond `rgba(255,255,255,.04)`, bordure subtile, texte primaire, même forme et padding que primary. Hover : fond légèrement relevé à `rgba(255,255,255,.08)`.
- **Focus visible:** à implémenter — actuellement absent.

### Chips / Tags
- **Style:** fond `rgba(255,255,255,.04)`, bordure subtile, texte dim, font mono, 0.6875rem, padding `0.25rem 0.625rem`, pilule complète.
- **Usage:** tags de skill (Clarifier, Spec, Acceptance…). Statiques, pas d'état selected/unselected.

### Cards (Skill Cards)
- **Corner Style:** 1.5rem (24px) — généreux mais maîtrisé. Ne pas dépasser.
- **Background:** surface (`#0a0a0a`).
- **Shadow Strategy:** aucune. Voir Elevation.
- **Border:** 1px `rgba(255,255,255,.08)`. Hover : bordure relevée à `rgba(255,255,255,.14)` + `translateY(-2px)`.
- **Internal Padding:** 2rem. Numéro de carte en mono muted en haut, icône 2.5rem, titre, description, tags, puis bloc d'installation séparé par un border-top.

### Navigation
- **Style:** pilule flottante fixée en haut, `backdrop-filter: blur(24px)`, fond `rgba(10,10,10,.6)`, bordure subtile. Brand à gauche, liens au centre, lien GitHub à droite.
- **Mobile:** liens masqués sous 768px, seul le brand + GitHub restent.

### Workflow Bar
- **Style:** pilule horizontale centrée, fond `rgba(255,255,255,.02)`, bordure subtile. Éapes en mono uppercase émeraude, séparées par des flèches muted. `flex-wrap` pour le mobile.

### Install Steps
- **Style:** numéros dans des cercles émeraude soft (fond accent-soft, bordure émeraude 20%, texte émeraude mono). Code inline avec fond `rgba(255,255,255,.04)` et radius `0.375rem`.

## 6. Do's and Don'ts

### Do:
- **Do** garder l'émeraude sur ≤10% de la surface. C'est un signal, pas un décor.
- **Do** utiliser le contraste tonal (`#050505` vs `#0a0a0a`) pour la profondeur, jamais les ombres.
- **Do** vérifier le contraste AA sur tout texte dim (`#a1a1a1` sur `#050505` = 6.9:1, validé).
- **Do** charger réellement Plus Jakarta Sans et JetBrains Mono via `@font-face` ou `<link>` — actuellement en fallback system-ui.
- **Do** respecter `prefers-reduced-motion` sur toutes les animations (déjà présent dans le code, à maintenir).
- **Do** garder le letter-spacing du display ≥ -0.04em.

### Don't:
- **Don't** utiliser `background-clip: text` avec un gradient. Le H1 actuel a un gradient émeraude→purple→blue — c'est un ban absolu. Remplacer par une couleur solide.
- **Don't** mettre un eyebrow uppercase tracked au-dessus de chaque section. Un kicker nommé délibéré est de la voix ; un eyebrow sur chaque section est de la grammaire AI.
- **Don't** ajouter des ombres portées (`box-shadow`) sur les cartes ou boutons. Le système est tonal plat.
- **Don't** dépasser 1.5rem (24px) de rayon sur les cartes. 24px est déjà le plafond.
- **Don't** faire du glassmorphism décoratif. Le backdrop-blur est réservé à la navigation, pas aux cartes.
- **Don't** utiliser les couleurs purple/blue/orange/red comme décor multi-couleur. Elles existent dans les tokens mais n'ont pas encore de rôle fonctionnel assigné.
- **Don't** reproduire le « hero-métrique template » (grand chiffre, petit label, gradient accent). Les badge-cards actuelles sont à la limite — à surveiller.
