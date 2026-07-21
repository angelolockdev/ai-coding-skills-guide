---
name: grill-me
description: Interroge l'utilisateur sans relache sur un plan ou un design avant
de coder. Utiliser quand le besoin est flou, qu'il reste des ambiguites produit
ou metier, ou avant toute fonctionnalite importante qui doit etre one-shot.
---

# Grill me

> Interview the user relentlessly about a plan or design.

## Quand l'utiliser

- Votre idee est encore floue.
- Vous voulez que l'agent one-shot la fonctionnalite.
- Avant d'ecrire la moindre ligne de code.
- Quand il reste des decisions implicites.

## Installation

```bash
npx skills@latest add mattpocock/skills --skill grill-me
```

## Usage dans l'agent

```text
/grill-me

Je veux ajouter un espace administrateur a mon SaaS.
Interroge-moi jusqu'a obtenir une specification sans hypothese majeure.
```

## Prompt universel (si commande slash non reconnue)

```text
Agis comme un analyste produit et un architecte logiciel exigeant.

Contexte du projet :
[Decrire le produit, la stack, les utilisateurs et l'existant.]

Idee ou fonctionnalite :
[Decrire ce que je pense vouloir construire.]

Ta mission :
- Ne modifie aucun fichier pour le moment.
- Interroge-moi une question a la fois.
- Explore le code lorsque la reponse peut etre trouvee dans le depot.
- Pour chaque question, propose aussi ta recommandation.
- Creuse les utilisateurs, roles, permissions, parcours, donnees, regles metier,
  erreurs, etats vides, limites, securite, responsive et criteres d'acceptation.
- Signale clairement les contradictions et les decisions encore ouvertes.

Quand le besoin est suffisamment clair, produis :
1. un resume de la fonctionnalite ;
2. les parcours utilisateurs ;
3. les regles metier ;
4. les cas limites et erreurs ;
5. les criteres d'acceptation testables ;
6. les decisions prises et questions restantes.

Attends ma validation avant de passer a l'implementation.
```

## Ce qu'un bon grilling doit faire emergener

- Qui utilise la fonctionnalite et avec quels roles ?
- Quelles actions sont autorisees, interdites ou soumises a approbation ?
- Quelles donnees sont obligatoires, historisees, exportees ou supprimees ?
- Que se passe-t-il en cas d'erreur reseau, de permission refusee ou de donnees absentes ?
- Quels tests permettent de dire objectivement que la fonctionnalite est terminee ?

## Livrable conseille

Demandez a l'agent d'enregistrer la synthese dans `docs/specs/nom-feature.md`
ou dans un PRD. Cette etape reduit les pertes de contexte avant l'implementation.

## Source

- [Matt Pocock Skills](https://github.com/mattpocock/skills)
- [Article Codelynx](https://codelynx.dev/posts/meilleurs-skills-coder-avec-ia)
