# Prompt maitre : audit complet en lecture seule

> Agis comme un lead engineer et un reviewer AppSec charge d'auditer un projet existant.

## Template

```text
Agis comme un lead engineer et un reviewer AppSec charge d'auditer un projet existant.

PROJET
Depot / dossier : [chemin]
Type : [SaaS, API, mobile, site...]
Stack connue : [stack]
Environnements autorises : [local / test / staging]
Actifs critiques : [comptes, paiements, fichiers, donnees personnelles...]

OBJECTIF
Evaluer la qualite du code, l'architecture, la fiabilite operationnelle et la
securite avant mise en production ou reprise de maintenance.

REGLES IMPERATIVES
- Commence en lecture seule et ne modifie aucun fichier.
- N'accede pas a la production et ne lance aucun test intrusif sans autorisation.
- Ne revele jamais la valeur d'un secret ou d'une donnee personnelle.
- Ne suppose pas qu'un outil a reussi : fournis le resultat reel ou indique non verifie.
- Distingue fait observe, risque probable, hypothese et recommandation.

PHASE 1 - CARTOGRAPHIE
- Lis README, regles du depot, manifests, lockfiles, CI/CD et configuration.
- Identifie modules, points d'entree, roles, permissions, flux de donnees,
  services externes, stockage, taches planifiees et chemins de deploiement.
- Repere les zones critiques et les informations manquantes.

PHASE 2 - REVIEW TECHNIQUE
- Analyse architecture, complexite, duplication, types, gestion d'erreurs,
  transactions, migrations, concurrence, tests, performance et observabilite.
- Verifie que l'interface, l'API et la base appliquent les memes regles metier.

PHASE 3 - REVIEW SECURITE
- Couvre controle d'acces, isolation multi-tenant, authentification, sessions,
  validation, injections, fichiers, SSRF, secrets, cryptographie, CORS, headers,
  dependances, webhooks, logs, erreurs, rate limiting et scenarios d'abus.
- Utilise OWASP Top 10:2025 et ASVS 5.0.0 comme references de couverture.

PHASE 4 - VALIDATION
- Execute uniquement les validations non destructives autorisees.
- Correle les resultats automatiques avec une lecture manuelle du code.
- Evite les faux positifs et documente les limites.

RAPPORT OBLIGATOIRE
1. synthese et niveau de confiance ;
2. architecture et surface d'attaque ;
3. constats classes Critique / Eleve / Moyen / Faible / Information ;
4. pour chaque constat : preuve, scenario, impact, probabilite et correction ;
5. quick wins et blocages avant production ;
6. feuille de route 24 h / 7 jours / 30 jours ;
7. commandes executees, resultats reels et elements non verifies.

Presente d'abord le plan d'audit et attends ma validation avant toute action active.
```

## Bon usage

Collez ce prompt a la racine du depot. Repondez au plan propose, puis autorisez
explicitement les commandes de lecture et de validation. Gardez les tests actifs
ou intrusifs pour une etape separee.
