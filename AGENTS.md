# AGENTS.md - Regles de routage pour agents IA

> Ce fichier donne a votre agent IA (Claude Code, Cursor, Codex, Hermes Agent...) une procedure fiable et reutilisable pour coder avec l'IA.

## Workflow principal

```
CLARIFIER -> SPECIFIER -> CONSTRUIRE -> PROUVER -> DESIGNER -> POLIR -> AUDITER
```

## Regles de routage

Pour chaque demande de developpement :

1. **Si le besoin contient des ambiguites produit ou metier**, declenche d'abord le skill `grill-me` et ne code pas avant validation.
2. **Pour toute fonctionnalite non triviale**, applique `apex-workflow` : analyse, plan, execution par tranches, tests et verification reelle.
3. **N'applique `impeccable` qu'apres validation fonctionnelle** de la tranche implementee.
4. **N'applique `make-interfaces-feel-better` que sur une interface deja coherente** (apres Impeccable ou si le design est deja correct).
5. **Avant livraison ou apres generation rapide**, lance `thermo-nuclear-code-quality-review`.
6. **Ne realise jamais une refactoring massive** sans plan, sauvegarde et tests.
7. **Indique toujours les commandes reellement executees** et les verifications qui n'ont pas pu etre faites.

## Contexte projet

Avant toute tache, l'agent doit :

- Lire `AGENTS.md`, `README.md` et les regles du depot.
- Reutiliser les composants et utilitaires existants.
- Ne pas ajouter de dependance sans justification.
- Ne pas exposer de secret ni modifier la production.

## Validation

Les commandes de validation habituelles :

- type-check : `[commande]`
- lint : `[commande]`
- tests : `[commande]`
- build : `[commande]`

## Structure des skills

Les fichiers `SKILL.md` dans `skills/` peuvent etre copies directement dans le dossier `.agents/skills/` de votre projet.

```
.agents/
+-- AGENTS.md
+-- skills/
    +-- grill-me/SKILL.md
    +-- apex-workflow/SKILL.md
    +-- impeccable/SKILL.md
    +-- make-interfaces-feel-better/SKILL.md
    +-- strict-code-audit/SKILL.md
```

## Prompts universels

Si votre agent ne supporte pas les commandes slash, utilisez les prompts universels dans `prompts/`.

## Important

> Ne demandez pas seulement a l'agent de faire propre. Donnez-lui un role, une procedure, des criteres verifiables, des limites claires et un format de rapport final.