# Creer son propre skill + checklist

> Les skills sont des dossiers avec un fichier `SKILL.md` qui donnent des
> instructions a votre agent IA. Vous l'installez une fois, puis vous le lancez
> avec une commande `/nom-du-skill`.

## Template minimal pour creer votre propre SKILL.md

```markdown
---
name: apex-workflow
description: Implemente les taches par analyse, plan, execution et verification.
  Utiliser pour les fonctionnalites importantes, correctifs complexes et taches
  necessitant des tests ou une preuve de fonctionnement.
---

# APEX Workflow

## Procedure
1. Lire le contexte et explorer le code.
2. Definir les criteres d'acceptation.
3. Proposer un plan par petites tranches.
4. Implementer une tranche a la fois.
5. Executer type-check, lint, tests et build adaptes.
6. Verifier les parcours critiques et corriger les ecarts.
7. Produire un rapport final avec preuves et limites.

## Regles
- Ne pas inventer de resultat de test.
- Ne pas modifier la production.
- Demander une decision pour les ambiguites produit majeures.
```

## Checklist de livraison

- [ ] La demande a ete clarifiee et les decisions importantes sont documentees.
- [ ] Les criteres d'acceptation sont observables et chacun a ete verifie.
- [ ] Les validations automatisees ont reellement ete executees.
- [ ] Les permissions sont controlees cote serveur, pas seulement dans l'interface.
- [ ] Les etats loading, empty, error, success et responsive sont traites.
- [ ] Les changements visuels restent coherents avec le design system.
- [ ] L'audit de qualite n'a pas laisse de blocage critique non traite.
- [ ] Les constats de securite Critiques et Eleves ont ete corriges, acceptes formellement ou bloquent la livraison.
- [ ] Chaque correction de securite a ete re-testee sans supposer sa resolution.
- [ ] Les migrations, sauvegardes, secrets et plan de rollback sont maitrises.
- [ ] Le rapport final distingue ce qui est prouve de ce qui reste a verifier.

## La regle la plus importante

> Ne demandez pas seulement a l'agent de faire propre. Donnez-lui un role,
> une procedure, des criteres verifiables, des limites claires et un format
> de rapport final.

## Memo en une ligne

```text
CLARIFIER -> SPECIFIER -> CONSTRUIRE -> PROUVER -> DESIGNER -> POLIR -> AUDITER
```
