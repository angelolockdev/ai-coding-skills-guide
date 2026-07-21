# Prompt : audit securite

> Effectue une revue de securite du projet courant en lecture seule.

## Template

```text
Effectue une revue de securite du projet courant en lecture seule.

PERIMETRE AUTORISE
Code : [dossiers]
Environnement : [local / staging]
Tests actifs autorises : [oui/non et limites]
Donnees sensibles : [types]

Methode :
1. Cartographie les actifs, acteurs, frontieres de confiance et entrees.
2. Construis des scenarios d'abus realistes avant de chercher des patterns.
3. Verifie le controle d'acces a chaque couche et l'isolation multi-tenant.
4. Analyse auth, sessions, reset, secrets, crypto, validation et erreurs.
5. Analyse dependances, uploads, webhooks, SSRF, CORS, headers et rate limits.
6. Verifie logs, alertes, donnees personnelles, suppression et sauvegardes.
7. Mappe les constats a OWASP Top 10:2025 et, si possible, ASVS 5.0.0.

Pour chaque vulnerabilite :
- titre et severite ;
- preuve sans divulguer de secret ;
- preconditions et scenario d'exploitation ;
- impact technique et metier ;
- fichier, route ou composant concerne ;
- correction recommandee ;
- test de non-regression ;
- niveau de confiance et faux positif possible.

Ne fournis pas de payload destructif et ne teste pas la production.
Separe les vulnerabilites prouvees, les faiblesses de conception et les
mesures d'amelioration.
```

## Reference OWASP Top 10:2025

| Ref | Domaine | Controles a verifier |
|-----|---------|----------------------|
| A01 | Acces | Autorisation serveur, roles, objets, tenants, fonctions admin et IDOR/BOLA. |
| A02 | Configuration | Secrets, debug, CORS, headers, permissions, stockage cloud et environnements. |
| A03 | Supply chain | Dependances, lockfiles, scripts, provenance, CI/CD et composants abandonnes. |
| A04 | Cryptographie | TLS, mots de passe, cles, donnees sensibles, algorithmes et rotation. |
| A05 | Injection | SQL/NoSQL, commandes, templates, XSS, SSRF et validation contextuelle. |
| A06 | Design | Threat model, logique metier, multi-tenant, limites et parcours d'abus. |
| A07 | Authentification | Sessions, cookies, MFA, reset, enumeration, bruteforce et revocation. |
| A08 | Integrite | Webhooks, uploads, deserialisation, mises a jour et donnees non fiables. |
| A09 | Logs et alertes | Evenements sensibles, correlation, alertes, retention et absence de secrets. |
| A10 | Exceptions | Fail-safe, erreurs, timeouts, retries, saturation et etats partiels. |
