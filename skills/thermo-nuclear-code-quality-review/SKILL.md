---
name: thermo-nuclear-code-quality-review
description: Audit sans pitié de la maintenabilité, la structure et la dette
  technique avant livraison. Utiliser après génération rapide, avant une PR
  importante, ou avant mise en production.
---

# Thermo-Nuclear Code Quality Review

> Un audit sans pitié de la qualité de votre code.

## Quand l'utiliser

- Une fonctionnalite importante vient d'etre generee rapidement.
- Un fichier depasse plusieurs centaines de lignes et continue de grossir.
- Les regles metier apparaissent dans plusieurs couches differentes.
- Une mise en production, une reprise de maintenance ou une PR importante approche.
- Le code a ete produit vite avec l'IA et vous voulez vous assurer de ne pas
  avoir laisse une bombe a retardement dans le codebase.

## Installation

```bash
npx skills add https://github.com/cursor/plugins --skill thermo-nuclear-code-quality-review
```

## Prompt d'audit sur et exploitable

```text
Effectue une revue thermo-nucleaire de la branche actuelle.

Objectif :
Evaluer la maintenabilite, la structure et la dette technique sans modifier
le comportement fonctionnel.

Analyse en priorite :
- les fichiers ou fonctions trop longs ;
- les responsabilites melees et les frontieres qui fuient ;
- les conditions ajoutees au hasard et la croissance du code spaghetti ;
- les duplications, wrappers inutiles et abstractions magiques ;
- les types flous, casts, any/unknown et contrats implicites ;
- les dependances circulaires ou le couplage fort ;
- les tests absents sur les chemins critiques ;
- les validations d'entree, permissions, secrets et gestion d'erreurs.

Cherche des mouvements de code judo : des restructurations qui suppriment
reellement de la complexite au lieu de seulement la deplacer.

Format du rapport :
1. synthese generale ;
2. constats classes Bloquant / Eleve / Moyen / Faible ;
3. preuve precise avec fichier et zone concernee ;
4. impact concret ;
5. correction recommandee ;
6. ordre de priorite ;
7. plan de refactoring par petites etapes.

Important :
- N'applique aucune refactoring massive avant ma validation.
- Separe les problemes de qualite, de securite et de performance.
- Ne cree pas de faux problemes pour allonger le rapport.
```

## Barriere de securite

Demandez d'abord un rapport. Validez ensuite les corrections une par une, avec
tests avant et apres. Une refactoring massive generee automatiquement peut
introduire plus de risques qu'elle n'en supprime.

## Ce qu'il check

- Fichiers ou fonctions trop longs.
- Responsabilites melees et frontieres qui fuient.
- Conditions ajoutees au hasard et code spaghetti.
- Duplications, wrappers inutiles et abstractions magiques.
- Types flous, casts, any/unknown et contrats implicites.
- Dependances circulaires ou couplage fort.
- Tests absents sur les chemins critiques.
- Validations d'entree, permissions, secrets et gestion d'erreurs.

## Source

- [Cursor Plugins - Thermo-Nuclear Review](https://github.com/cursor/plugins/blob/main/cursor-team-kit/skills/thermo-nuclear-code-quality-review/SKILL.md)
- [Article Codelynx](https://codelynx.dev/posts/meilleurs-skills-coder-avec-ia)
