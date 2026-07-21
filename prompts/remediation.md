# Prompt : remediation controlee

> Corrige uniquement un constat valide a la fois.

## Template

```text
Corrige uniquement le constat [ID] valide dans le rapport d'audit.

Avant modification :
- reproduis le probleme ou etablis un test qui echoue ;
- confirme la cause racine et les fichiers concernes ;
- propose le plus petit changement sur ;
- indique migration, compatibilite, sauvegarde et rollback necessaires.

Pendant la correction :
- ne melange pas de refactoring sans rapport ;
- applique le controle cote serveur et ajoute la defense en profondeur utile ;
- protege les donnees existantes ;
- ajoute des tests unitaires, integration ou end-to-end adaptes.

Apres la correction :
- execute le test de reproduction, la suite pertinente, lint, type-check et build ;
- verifie les parcours voisins et les permissions negatives ;
- fournis le diff resume, les preuves, risques restants et procedure de rollback.

Arrete-toi apres ce constat et attends ma validation avant le suivant.
```

## Priorisation operationnelle

| Severite | Delai indicatif | Situation type |
|-----------|----------------|----------------|
| Critique | Immediat | Compromission active, contournement d'auth, fuite massive ou perte de donnees. |
| Eleve | 24h a 7j | Exploitation realiste avec impact important, acces indu ou faiblesse majeure. |
| Moyen | Prochain sprint | Defense insuffisante, panne probable, dette risquee ou exploitation avec preconditions. |
| Faible | Backlog planifie | Durcissement, dette localisee ou impact limite et peu probable. |
| Information | Documentation | Observation, preuve manquante ou amelioration sans vulnerabilite demontree. |

## Fiche standard pour chaque constat

```text
ID : SEC-001
Titre : [probleme concret]
Severite : [Critique / Eleve / Moyen / Faible]
Statut : [Ouvert / Accepte / Corrige / Re-teste]
Preuve : [fichier, route, configuration ou resultat]
Scenario : [preconditions -> action -> resultat]
Impact : [technique + metier]
Reference : [OWASP / ASVS / exigence interne]
Correction : [changement minimal recommande]
Validation : [test permettant de fermer le constat]
Responsable / echeance : [a completer]
```
