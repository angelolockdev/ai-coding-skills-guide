---
name: apex-workflow
description: Implémente les tâches par analyse, plan, exécution et vérification.
  Utiliser pour les fonctionnalités importantes, correctifs complexes et tâches
  nécessitant des tests ou une preuve de fonctionnement.
---

# APEX Workflow

> Analyze - Plan - Execute - eXamine

## Quand l'utiliser

- La fonctionnalite est claire mais importante.
- Vous voulez que l'agent teste son propre code.
- Vous voulez une preuve visuelle (screenshot) du resultat.
- Pour tout correctif complexe necessitant des tests.

## Installation

```bash
# Option 1 : skill autonome
npx skills@latest add melvynx/aiblueprint --skill apex

# Option 2 : setup officiel aiblueprint
npx aiblueprint-cli@latest agents setup
```

> Le depot AIBlueprint evolue rapidement. Si le skill autonome apex n'est plus
> propose par l'installateur, utilisez le setup officiel puis appliquez le
> workflow APEX avec le prompt universel ci-dessous.

## Prompt universel APEX

```text
Applique le workflow APEX a la tache suivante.

Tache :
[Decrire la fonctionnalite ou le correctif.]

A - ANALYZE
- Inspecte le code existant, les conventions et les dependances concernees.
- Identifie les risques, inconnues et fichiers probablement touches.
- Ne code pas avant d'avoir compris les flux existants.

P - PLAN
- Propose un plan par petites etapes verifiables.
- Definis des criteres d'acceptation precis pour chaque etape.
- Indique les tests a ajouter ou a mettre a jour.

E - EXECUTE
- Implemente une tranche verticale a la fois.
- Respecte l'architecture et les conventions du projet.
- Evite les refactorisations non necessaires.

X - EXAMINE
- Execute type-check, lint, tests et build selon le projet.
- Verifie les parcours critiques dans l'application.
- Si une interface est modifiee, fournis une capture ou une preuve visuelle.
- Compare le resultat aux criteres d'acceptation.
- Corrige les ecarts avant de conclure.

Rapport final obligatoire :
1. fichiers modifies ;
2. decisions prises ;
3. commandes de validation executees et resultats ;
4. criteres d'acceptation valides ;
5. limites ou risques restants.
```

## Exemple : permissions dans un SaaS

```text
Applique APEX pour ajouter trois roles : Lecteur, Manager et Admin.
Les permissions doivent etre appliquees dans l'interface et dans l'API.
Ajoute des tests empechant un Lecteur de modifier une ressource et un Manager
de gerer les utilisateurs. Fournis la preuve des tests executes.
```

## Le detail qui change tout : les screenshots

A chaque feature, APEX lance l'app et envoie un screenshot de ce que ca donne.
Plus besoin de lancer l'app et de tester a la main : on regarde le screenshot,
on corrige, on renvoie un nouveau screenshot qui prouve que ca marche.

## Source

- [AIBlueprint documentation](https://docs.aiblueprint.dev/)
- [Article Codelynx](https://codelynx.dev/posts/meilleurs-skills-coder-avec-ia)
