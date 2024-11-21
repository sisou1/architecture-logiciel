# Réponse au TP

## Problèmes identifiés

- `npm install` n'installe pas le package `nodemon`.
- L'API n'a pas de racine, **"localhost:3001"** renvoie une erreur.
- Le dossier n'est pas organisé, tout est regroupé dans un seul fichier.

## Solutions proposées

- Ajout de `nodemon` dans les packages de l'application.
- Création d'un endpoint pour la racine de l'API, permettant de s'assurer du bon fonctionnement et pouvant également servir de **healthcheck**.
- Organisation du projet en séparant les routes pour faciliter la lecture et permettre un développement futur plus efficace.
- Ajout de quelques commentaires (si on veut être tatillon).  
