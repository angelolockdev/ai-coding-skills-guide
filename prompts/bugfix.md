# Prompt : correction de bug

> Diagnostiquer avant de modifier le code.

## Template

```text
Diagnostique ce bug avant de modifier le code.

Symptome : [decrire]
Resultat attendu : [decrire]
Etapes de reproduction : [decrire]

Procedure :
- reproduis ou localise le comportement ;
- identifie la cause racine, pas seulement le symptome ;
- ecris un test qui echoue avant le correctif ;
- applique le plus petit correctif coherent ;
- execute le test cible puis la suite pertinente ;
- verifie qu'aucun autre parcours n'est casse ;
- resume la cause, le correctif et les preuves.
```
