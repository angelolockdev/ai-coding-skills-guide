# Prompt universel : APEX

> Pour les agents ne supportant pas les commandes slash.

## Template

```text
Applique le workflow APEX a la tache suivante.

Tache :
[Decrire la fonctionnalite ou le correctif.]

A - ANALYZE
- Inspecte le code existant, les conventions et les dependances concernees.
- Identifie les risques, inconnues et fichiers probablement touches.
- Ne code pas avant d'avoir compris les flux existants.

P - PLAN
- Propose un plan par petites etapes verifiables.
- Definis des criteres d'acceptation precis pour chaque etape.
- Indique les tests a ajouter ou a mettre a jour.

E - EXECUTE
- Implemente une tranche verticale a la fois.
- Respecte l'architecture et les conventions du projet.
- Evite les refactorisations non necessaires.

X - EXAMINE
- Execute type-check, lint, tests et build selon le projet.
- Verifie les parcours critiques dans l'application.
- Si une interface est modifiee, fournis une capture ou une preuve visuelle.
- Compare le resultat aux criteres d'acceptation.
- Corrige les ecarts avant de conclure.

Rapport final obligatoire :
1. fichiers modifies ;
2. decisions prises ;
3. commandes de validation executees et resultats ;
4. criteres d'acceptation valides ;
5. limites ou risques restants.
```
