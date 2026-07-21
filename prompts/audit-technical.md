# Prompt : audit technique

> Effectue un audit technique en lecture seule du projet courant.

## Template

```text
Effectue un audit technique en lecture seule du projet courant.

Priorites metier : [parcours ou modules critiques]
Contraintes : [delai, trafic, budget, conformite, hebergement]

Analyse :
- architecture et responsabilites des modules ;
- dette technique, complexite et duplications ;
- contrats API, schema de donnees, migrations et transactions ;
- gestion des erreurs, retries, idempotence et concurrence ;
- tests manquants sur les parcours critiques ;
- dependances, build, CI/CD et reproductibilite ;
- performance, observabilite, sauvegarde, restauration et rollback ;
- documentation necessaire pour reprendre la maintenance.

Pour chaque constat, indique :
ID | severite | preuve precise | impact | scenario de panne | correction minimale |
effort estimatif | dependances | test de validation.

Termine par :
- les 5 risques techniques majeurs ;
- les quick wins realisables sans refonte ;
- un plan de stabilisation par petites PR ;
- les zones non verifiees et informations a demander.

Ne refactorise rien avant validation du rapport.
```

## Zones a examiner

- **Architecture** : frontieres des modules, dependances, responsabilites, couplage, conventions et documentation.
- **Code** : complexite, duplication, fonctions longues, types, erreurs, concurrence, dates, calculs monetaires et idempotence.
- **Donnees et API** : schema, migrations, index, contraintes, transactions, pagination, versionnement et contrats.
- **Tests** : couverture des chemins critiques, tests metier, integration, end-to-end, fixtures et stabilite.
- **Dependances** : versions, lockfile, paquets abandonnes, licences, mises a jour et surface de supply chain.
- **CI/CD** : build reproductible, controles de qualite, migrations, variables, separation des environnements et rollback.
- **Exploitation** : logs, metriques, traces, alertes, sauvegardes, restauration, runbooks et reprise apres incident.
- **Performance** : requetes N+1, index manquants, cache, taille des bundles, boucles couteuses et limites de ressources.

## Signal d'alerte

Un build qui passe ne prouve pas que le systeme est maintenable, restaurable ou fiable.
Verifiez aussi les migrations, sauvegardes, erreurs, limites, monitoring et procedures de deploiement.
