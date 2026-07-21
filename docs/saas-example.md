# Exemple complet : module de facturation SaaS

> Besoin initial : permettre de creer une facture, modifier son statut et exporter un PDF.
> Voici comment transformer cette idee en workflow fiable.

## Etape 1 - Clarification

```text
/grill-me

Je veux ajouter un module de facturation a mon SaaS.
Fonctions envisagees : brouillon, envoi, paiement, annulation et export PDF.
Interroge-moi sur les roles, numerotation, taxes, devise, permissions,
modification apres envoi, erreurs, donnees legales et criteres d'acceptation.
```

## Etape 2 - Implementation verifiee

```text
Applique APEX a la specification docs/specs/facturation.md.
Commence par la creation d'un brouillon avec lignes de facture et calcul total.
Ajoute les validations cote serveur, les tests metier et la preuve UI.
N'implemente l'envoi et le PDF qu'apres validation de cette premiere tranche.
```

## Etape 3 - Design et finition

```text
/impeccable polish la liste et l'editeur de factures

Puis :
/skill make-interfaces-feel-better

Verifie particulierement la lisibilite des montants, les statuts, les actions
destructives, l'impression, le mobile et les etats sans donnees.
```

## Etape 4 - Audit avant production

```text
Lance une revue thermo-nucleaire du module de facturation.
Concentre-toi sur les calculs monetaires, l'arrondi, la numerotation,
les permissions, la modification apres emission, les transactions,
la generation PDF, les tests et la separation logique metier / interface.
Produis le rapport avant toute refactoring.
```

## Criteres d'acceptation minimaux

- Un brouillon calcule les totaux de maniere deterministe.
- Un utilisateur non autorise ne peut pas modifier la facture.
- Une facture emise respecte les regles d'immutabilite decidees.
- L'export PDF correspond aux donnees enregistrees.
- Les cas d'arrondi et d'erreur disposent de tests.

## Exemple SaaS existant (audit complet)

Contexte : une application metier fonctionne en demonstration, mais son
architecture, ses permissions et sa preparation a la production n'ont jamais
ete auditees.

```text
Audite ce SaaS existant avant mise en production.

Contexte :
- Frontend : Next.js
- API et base : Supabase/PostgreSQL
- Authentification : email + mot de passe
- Roles : utilisateur, manager, administrateur
- Donnees : clients, documents et factures
- Deploiement prevu : Vercel

Commence en lecture seule.

Verifie en priorite :
1. isolation des organisations et controle d'acces sur chaque requete ;
2. politiques RLS, fonctions SQL, cles publiques/service et stockage de fichiers ;
3. validations serveur, mass assignment, uploads et liens signes ;
4. routes admin, actions serveur, middleware et contournements possibles ;
5. migrations, contraintes, transactions et sauvegarde/restauration ;
6. dependances, variables d'environnement, CI/CD et separation preview/prod ;
7. logs, erreurs, alertes, rate limits et plan de rollback ;
8. tests manquants sur permissions, facturation et suppression de donnees.

Produis d'abord :
- la carte de l'architecture et des flux ;
- les blocages avant production ;
- les constats prouves avec priorite ;
- un plan de correction en petites PR ;
- une checklist de re-test.

Ne modifie rien avant validation du rapport.
```

### Resultat attendu

Vous devez obtenir une decision exploitable : ce qui bloque reellement la
production, ce qui peut etre corrige rapidement, ce qui exige une refonte
limitee et ce qui releve seulement d'un durcissement ulterieur.
