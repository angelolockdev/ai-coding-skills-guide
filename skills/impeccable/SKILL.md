---
name: impeccable
description: Corrige le slop visuel et rend le design intentionnel. Utiliser
  quand l'interface fonctionne mais ressemble a une UI generique, pour
  renforcer la hierarchie, le responsive et la coherence du design.
---

# Impeccable

> The Missing Design Vocabulary for Agents.

## Quand l'utiliser

- L'ecran fonctionne mais ressemble a une UI generique.
- Vous voulez corriger le "slop" visuel (typographie bizarre, choix de design cliches).
- Apres validation fonctionnelle d'une tranche.

## Installation et initialisation

```bash
# Terminal
npx impeccable install

# Dans l'agent
/impeccable init
```

Cela genere un dossier `impeccable` avec un fichier design construit en fonction
de votre application : regles, contraintes, ce que l'agent doit faire et ne pas faire.

## Usage dans l'agent

```text
/impeccable polish la page dashboard et ses etats responsive
```

## Prompt universel de deslopification

```text
Analyse et ameliore l'interface suivante sans changer ses fonctionnalites.

Perimetre :
[Route, page ou composants concernes.]

Contexte visuel :
[Produit, public, ton, marque, couleurs et contraintes existantes.]

Objectifs :
- Renforcer la hierarchie entre titre, contenu, actions et informations secondaires.
- Corriger les espacements, alignements, densite, contraste et typographie.
- Eviter les choix visuels generiques associes aux interfaces generees par IA.
- Preserver le design system et les composants existants lorsqu'ils sont coherents.
- Ameliorer les etats hover, focus, disabled, loading, empty, success et error.
- Verifier mobile, tablette et desktop.
- Respecter l'accessibilite clavier et le contraste.

Contraintes :
- Ne reecris pas la logique metier.
- N'ajoute pas de dependance lourde sans justification.
- Ne transforme pas tout en cartes, gradients ou effets decoratifs.

A la fin, fournis :
1. la liste des problemes detectes ;
2. les changements realises ;
3. les captures avant/apres si possible ;
4. les points restant a valider humainement.
```

## Impeccable contient 23 sous-skills

`clarify`, `harden`, `optimize`... Lancez directement le skill principal `/impeccable`
qui fait office de routing : il vient picker les bons elements tout seul.

Il y a aussi un CLI (`npx impeccable`) qui scanne vos fichiers pour detecter les antipatterns.

## Checklist visuelle

- Le titre principal et l'action prioritaire sont identifiables en moins de trois secondes.
- Les espacements suivent un rythme coherent plutot que des valeurs arbitraires.
- Les composants conservent la meme logique sur mobile et desktop.
- Les etats de chargement, d'erreur et de donnees absentes sont reellement concus.
- Le rendu correspond au produit, pas seulement a une tendance de design.

## Difference avec Make Interface Feel Better

Impeccable remet une interface sur de bons rails. Make Interface Feel Better
intervient ensuite sur les details : alignement optique, transitions, bordures,
stabilite des chiffres et sensation generale.

## Source

- [Impeccable - Getting started](https://impeccable.style/tutorials/getting-started/)
- [Article Codelynx](https://codelynx.dev/posts/meilleurs-skills-coder-avec-ia)
