# Adaptation a Hermes Agent et aux agents sans slash commands

> La methode reste utilisable meme si votre agent ne reconnaît pas directement
> les commandes slash. Vous pouvez installer les dossiers de skills compatibles
> ou integrer leurs principes dans vos regles de projet.

## Structure recommandee

```text
.agents/
+-- AGENTS.md
+-- skills/
    +-- grill-me/
    |   +-- SKILL.md
    +-- apex-workflow/
    |   +-- SKILL.md
    +-- ui-deslop/
    |   +-- SKILL.md
    +-- interface-polish/
    |   +-- SKILL.md
    +-- strict-code-audit/
        +-- SKILL.md
```

## Regle de routage a placer dans AGENTS.md

```text
Pour chaque demande de developpement :

1. Si le besoin contient des ambiguites produit ou metier, declenche d'abord
   le skill grill-me et ne code pas avant validation.
2. Pour toute fonctionnalite non triviale, applique apex-workflow : analyse,
   plan, execution par tranches, tests et verification reelle.
3. N'applique ui-deslop qu'apres validation fonctionnelle.
4. N'applique interface-polish que sur une interface deja coherente.
5. Avant livraison ou apres generation rapide, lance strict-code-audit.
6. Ne realise jamais une refactoring massive sans plan, sauvegarde et tests.
7. Indique toujours les commandes reellement executees et les verifications
   qui n'ont pas pu etre faites.
```

## Utilisation avec Hermes Agent

Hermes Agent ne supporte pas nativement les commandes slash des skills externes.
Pour utiliser ce guide avec Hermes :

1. Copiez les fichiers `SKILL.md` du dossier `skills/` dans votre dossier
   `.agents/skills/` local.
2. Placez le fichier `AGENTS.md` a la racine de votre projet.
3. Utilisez les prompts universels du dossier `prompts/` comme instructions
   directes dans le chat.
4. Chargez les skills avec `skill_view(name)` ou referencez-les dans votre
   configuration Hermes.

## Utilisation avec d'autres agents

- **Claude Code** : supporte nativement les commandes slash.
- **Cursor** : supporte nativement les commandes slash.
- **Codex** : supporte les fichiers `SKILL.md`.
- **GitHub Copilot** : utilisez les prompts universels.
- **Gemini CLI** : utilisez les prompts universels.
- **VS Code** : utilisez les prompts universels ou les extensions specifiques.
