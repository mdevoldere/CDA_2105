# NodeJS

Télécharger et installer la version LTS de NodeJS sur le [Site officiel](https://nodejs.org/en/).

> [Suivre le Tutorial d'introduction](https://docs.microsoft.com/fr-fr/windows/dev-environment/javascript/nodejs-beginners-tutorial)

---

## Initialiser un nouveau projet NodeJS

1. Créer un répertoire pour héberger votre projet
2. Ouvrir un terminal et positionnez vous dans ce répertoire
3. Taper la commande  `npm init` et répondez aux différentes questions

Un fichier `package.json` est créé dans le répertoire, il contient les informations de configuration de votre application NodeJS.

Éditer le fichier package.json pour ajouter une commande permettant de lancer l'application.

dans la section "`scripts`", ajouter la ligne :

```json 
"start": "node index.js"
```
La section "`scripts`" devrait ressembler à ceci :

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  }
```

--- 

## Créer une API avec express.js

Pour créer une API Restfull, nous utiliserons express.js qui simplifie le montage des applications web NodeJS.

> [Suivre le tutoriel d'introduction](https://expressjs.com/fr/4x/api.html)

1. Ajouter les dépendances 

Dans le terminal: 
```shell
npm install express
npm install cors
```

Créer un fichier `index.js`, ce sera le point d'entrée de l'application.

Dans ce fichier, ajouter le code suivant:

```js
// index.js

// import d'express.js dans l'application
var express = require('express');

// Création d'une nouvelle instance d'express.js
var app = express();

// Ajout du middleware 'cors' pour gérer l'accès à l'API
// https://developer.mozilla.org/fr/docs/Web/HTTP/CORS
app.use(cors());

// Ajout du middleware permettant la gestion des fichiers statiques (html, css, images...)
app.use('/static', express.static(__dirname + '/public'));

// Page d'accueil de l'application
app.get('/', (req, res) => {
    res.end('Hello World !');
});


// Démarrage du serveur sur le port 80
app.listen(80);

```

Enregistrer le fichier puis, dans le terminal entrer la commande :

```shell
npm start
```
Ceci exécutera la commade "start" de la section "scripts" du fichier package.json (oui, celle ajoutée plus haut).

Laisser le terminal ouvert puis se rendre sur http://localhost (dans un navigateur) pour observer le résultat.

Pour arrêter le serveur, faites un "`CTRL + C`" dans le terminal.



