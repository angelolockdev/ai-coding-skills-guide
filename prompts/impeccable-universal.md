# Prompt universel : Impeccable

> Pour les agents ne supportant pas les commandes slash.

## Template

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
