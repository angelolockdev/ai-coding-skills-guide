# Prompt universel : Thermo-Nuclear Code Quality Review

> Pour les agents ne supportant pas les commandes slash.

## Template

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
