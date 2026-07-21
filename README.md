# AI Coding Skills Guide

> Guide des meilleures pratiques de codage avec l'IA - Skills essentiels pour Claude Code, Cursor, Codex, GitHub Copilot, Gemini CLI, Hermes Agent et tous les agents acceptant des fichiers `SKILL.md`.

**Article de départ :** [Codelynx - Mes 5 skills indispensables pour coder avec l'IA](https://codelynx.dev/posts/meilleurs-skills-coder-avec-ia)

**Ecosysteme skills :** [skills.sh](https://www.skills.sh/)

## Workflow en une ligne

```
CLARIFIER -> SPECIFIER -> CONSTRUIRE -> PROUVER -> DESIGNER -> POLIR -> AUDITER
```

## Les 5 skills essentiels

| Etape | Skill | Description | Installation |
|-------|-------|-------------|-------------|
| Avant de coder | **Grill me** | Clarifier le besoin avant toute modification du code | `npx skills@latest add mattpocock/skills --skill grill-me` |
| Pendant le dev | **APEX** | Analyser, planifier, executer, examiner et verifier | `npx skills@latest add melvynx/aiblueprint --skill apex` |
| Design UI | **Impeccable** | Corriger le slop visuel et rendre le design intentionnel | `npx impeccable install` |
| Finition UI | **Make Interface Feel Better** | Polir les details d'une interface deja fonctionnelle | `npx skills add jakubkrehel/make-interfaces-feel-better` |
| Avant livraison | **Thermo-Nuclear Review** | Auditer severement la maintenabilite avant livraison | `npx skills add https://github.com/cursor/plugins --skill thermo-nuclear-code-quality-review` |

## Quel skill choisir ?

- **Votre idee est encore floue** : commencez par Grill me.
- **La fonctionnalite est claire mais importante** : utilisez APEX.
- **L'ecran fonctionne mais ressemble a une UI generique** : utilisez Impeccable.
- **L'ecran est deja bon mais manque de finition** : utilisez Make Interface Feel Better.
- **Le code a ete produit rapidement ou doit partir en production** : terminez par Thermo-Nuclear Review.

## Structure du depot

```
ai-coding-skills-guide/
+-- README.md                  # Ce fichier
+-- AGENTS.md                  # Regles de routage pour agents IA
+-- skills/                    # SKILL.md individuels prets a installer
|   +-- grill-me/SKILL.md
|   +-- apex-workflow/SKILL.md
|   +-- impeccable/SKILL.md
|   +-- make-interfaces-feel-better/SKILL.md
|   +-- thermo-nuclear-code-quality-review/SKILL.md
+-- prompts/                   # Prompts universels reutilisables
|   +-- grill-me-universal.md
|   +-- apex-universal.md
|   +-- impeccable-universal.md
|   +-- make-interfaces-universal.md
|   +-- thermo-nuclear-universal.md
|   +-- audit-master.md
|   +-- audit-technical.md
|   +-- audit-security.md
|   +-- remediation.md
|   +-- re-test.md
|   +-- context-block.md
|   +-- feature.md
|   +-- bugfix.md
|   +-- code-review.md
|   +-- final-gate.md
+-- docs/                      # Documentation detaillee
|   +-- workflow.md            # Workflow complet recommande
|   +-- audit-method.md        # Methode d'audit en 8 phases
|   +-- saas-example.md        # Exemple complet: module de facturation
|   +-- hermes-adaptation.md   # Adaptation a Hermes Agent et agents sans slash commands
|   +-- create-own-skill.md   # Creer son propre skill + checklist
```

## Installation rapide (tous les skills)

```bash
# 1. Grill me (Matt Pocock)
npx skills@latest add mattpocock/skills --skill grill-me

# 2. APEX (Melvynx / AI Blueprint)
npx skills@latest add melvynx/aiblueprint --skill apex
# ou: npx aiblueprint-cli@latest agents setup

# 3. Impeccable
npx impeccable install
npx impeccable init

# 4. Make Interface Feel Better (Jakub Krehel)
npx skills add jakubkrehel/make-interfaces-feel-better

# 5. Thermo-Nuclear Code Quality Review (Cursor Team)
npx skills add https://github.com/cursor/plugins --skill thermo-nuclear-code-quality-review
```

Apres installation, relancez votre agent ou editeur pour qu'il recharge les nouveaux skills.

## Pre-requis

```bash
node --version
npm --version
npx --version
```

## Sources

- [Article Codelynx](https://codelynx.dev/posts/meilleurs-skills-coder-avec-ia)
- [Impeccable - Getting started](https://impeccable.style/tutorials/getting-started/)
- [Matt Pocock Skills - Grill me](https://github.com/mattpocock/skills)
- [AIBlueprint documentation](https://docs.aiblueprint.dev/)
- [Make Interfaces Feel Better](https://github.com/jakubkrehel/make-interfaces-feel-better)
- [Cursor Plugins - Thermo-Nuclear Review](https://github.com/cursor/plugins/blob/main/cursor-team-kit/skills/thermo-nuclear-code-quality-review/SKILL.md)
- [OWASP Top 10:2025](https://owasp.org/Top10/)
- [OWASP ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf)
- [skills.sh - The Agent Skills Directory](https://www.skills.sh/)

## Licence

MIT