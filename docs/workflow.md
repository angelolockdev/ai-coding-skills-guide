# Workflow complet recommande

> Le workflow ci-dessous evite de demander a l'IA de tout faire en une seule instruction.
> Chaque etape produit un livrable verifiable qui alimente la suivante.

## Vue d'ensemble

```
CLARIFIER -> SPECIFIER -> CONSTRUIRE -> PROUVER -> DESIGNER -> POLIR -> AUDITER
```

## Etapes detaillees

| Etape | Skill / methode | Resultat attendu |
|-------|-----------------|-----------------|
| 0 | Contexte | Lire le depot, la stack, les conventions, le design system et les commandes de test. |
| 1 | Grill me | Transformer l'idee en besoin precis et en criteres d'acceptation. |
| 2 | Specification | Enregistrer la synthese dans un fichier de reference. |
| 3 | APEX | Implementer par tranches verticales et verifier les criteres. |
| 4 | Impeccable | Corriger la hierarchie et le responsive apres validation fonctionnelle. |
| 5 | Polish | Ameliorer les details et micro-interactions. |
| 6 | Audit existant | Review technique et securite en lecture seule avec preuves et priorites. |
| 7 | Remedition | Corriger les constats valides par petits lots avec tests et rollback. |
| 8 | Gate final | Re-test, build, securite, accessibilite, sauvegarde et decision de mise en production. |

## Sequence de commandes type

```text
/grill-me
# Repondre aux questions, puis faire enregistrer la specification.

/apex
# Ou utiliser le prompt APEX universel.

/impeccable polish la page concernee

/skill make-interfaces-feel-better

/thermo-nuclear-code-quality-review

# Projet existant : utiliser ensuite le prompt maitre d'audit en lecture seule,
# puis les prompts de remediation et de re-test de la section audit.
```

## Prompt de controle final

```text
Avant de declarer la tache terminee :
- relis la specification et chaque critere d'acceptation ;
- execute type-check, lint, tests et build ;
- verifie les permissions et validations cote serveur ;
- verifie les etats loading, empty, error et success ;
- teste au minimum un ecran mobile et un ecran desktop ;
- liste les commandes executees avec leur resultat reel ;
- indique honnetement ce qui n'a pas pu etre verifie ;
- fournis un resume des fichiers modifies et un plan de rollback simple.
```

## La regle la plus importante

> Ne demandez pas seulement a l'agent de faire propre. Donnez-lui un role,
> une procedure, des criteres verifiables, des limites claires et un format
> de rapport final.
