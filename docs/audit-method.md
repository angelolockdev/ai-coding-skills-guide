# Methode d'audit en 8 phases

> Cette section s'applique lorsqu'un projet existe deja : application generee ou
> acceleree par IA, reprise de maintenance, preparation a la mise en production,
> dette technique inconnue ou suspicion de vulnerabilites.

## Trois exercices differents

- **Review** : reperer les defauts concrets du code et des changements.
- **Audit technique** : evaluer architecture, donnees, tests, deploiement, observabilite et maintenabilite.
- **Audit securite** : verifier les controles de securite, les scenarios d'abus et l'exposition reelle.

## Regles de securite avant de commencer

- **Autorisation** : definir par ecrit le depot, les environnements, domaines, API et comptes inclus dans le perimetre.
- **Environnement** : preferer une copie locale, une branche dediee ou une preproduction avec donnees anonymisees.
- **Non-destructif** : commencer en lecture seule. Ne pas lancer de test intrusif, migration, suppression ou charge importante sans validation.
- **Secrets** : ne jamais afficher les valeurs de cles, tokens, mots de passe ou donnees personnelles dans le rapport.
- **Traceabilite** : conserver les commandes executees, resultats, limites, versions et preuves reproductibles.
- **Retour arriere** : preparer sauvegarde, rollback et verification avant toute correction importante.

## Les 8 phases

| Etape | Skill / methode | Resultat attendu |
|-------|-----------------|-----------------|
| 0 | Cadrage | Definir perimetre, objectifs, actifs critiques, environnements et interdictions. |
| 1 | Cartographie | Comprendre architecture, flux de donnees, roles, dependances et deploiement. |
| 2 | Review du code | Chercher bugs, regressions, logique fragile, types flous et tests manquants. |
| 3 | Audit technique | Evaluer architecture, base de donnees, API, performance, CI/CD et exploitation. |
| 4 | Audit securite | Verifier controles, scenarios d'abus et risques OWASP applicables. |
| 5 | Priorisation | Classer par severite, probabilite, impact metier, effort et dependances. |
| 6 | Remedition | Corriger par petits lots testables avec plan de rollback. |
| 7 | Re-test | Reproduire chaque constat, verifier la correction et rechercher les regressions. |

## Livrables attendus

- Une synthese dirigeant
- Un rapport technique detaille
- Un registre des risques
- Une feuille de route 24h / 7 jours / 30 jours
- Les quick wins
- Les preuves de validation
- Les limites de l'audit

## Priorisation operationnelle

| Severite | Delai indicatif | Situation type |
|-----------|----------------|----------------|
| Critique | Immediat | Compromission active, contournement d'authentification, fuite massive ou perte de donnees. |
| Eleve | 24h a 7j | Exploitation realiste avec impact important, acces indu ou faiblesse majeure avant production. |
| Moyen | Prochain sprint | Defense insuffisante, panne probable, dette risquee ou exploitation avec preconditions. |
| Faible | Backlog planifie | Durcissement, dette localisee ou impact limite et peu probable. |
| Information | Documentation | Observation, preuve manquante ou amelioration sans vulnerabilite demontree. |

## Signal d'alerte

> Un build qui passe ne prouve pas que le systeme est maintenable, restaurable ou fiable.
> Verifiez aussi les migrations, sauvegardes, erreurs, limites, monitoring et
> procedures de deploiement.
