# 📘 TP 6 : Découverte des Hooks Avancés et des Hooks Personnalisés

## 🎯 Objectif

Ce TP a pour but de découvrir et maîtriser les hooks avancés de React :

* `useReducer` pour gérer un état complexe
* `useRef` pour manipuler le DOM et stocker des valeurs persistantes
* `useEffect` avec nettoyage
* Création et utilisation d’un hook personnalisé (`useFetch`)

---

## 🛠️ Technologies utilisées

* React.js
* JavaScript (ES6)
* HTML / CSS
* API REST (jsonplaceholder)

---

## 🚀 Lancer le projet

```bash
npx create-react-app tp-hooks-debutant
cd tp-hooks-debutant
npm start
```

---

## 📁 Structure du projet

```bash
src/
│── App.js
│── App.css
│── Compteur.js
│── FocusInput.js
│── CompteurRendu.js
│── ListeArticles.js
│── Timer.js
│── useFetch.js
│── index.js
```

---

## 🔧 Fonctionnalités

### 🔢 1. Compteur avec useReducer

* Gestion d’un compteur avec un reducer
* Actions :

  * Incrémenter
  * Décrémenter
  * Réinitialiser

👉 Permet de structurer la gestion d’état

---

### 🎯 2. Focus automatique avec useRef

* Met le curseur dans un champ input au clic d’un bouton

👉 Exemple : formulaire ou barre de recherche

---

### 🔁 3. Compteur de rendus

* Compte le nombre de fois où le composant est affiché
* Utilise `useRef` + `useEffect`

👉 Résultat visible dans la console

---

### 🌐 4. Hook personnalisé useFetch

* Récupère des données depuis une API
* Gère :

  * chargement
  * données
  * erreurs

👉 Rend le code réutilisable

---

### 📄 5. Liste d’articles

* Utilise `useFetch`
* Affiche les données récupérées depuis une API

---

### ⏱️ 6. Timer avec nettoyage

* Incrémente un compteur chaque seconde
* Nettoyage avec `clearInterval`

👉 Évite les bugs mémoire

---

## 🧠 Concepts clés appris

* Gestion d’état avancée avec `useReducer`
* Manipulation du DOM avec `useRef`
* Effets et nettoyage avec `useEffect`
* Création de hooks personnalisés
* Consommation d’API avec `fetch`

---

## 🎨 Améliorations réalisées

* Design moderne avec CSS
* Cartes interactives
* Boutons stylisés
* Interface responsive

---


https://github.com/user-attachments/assets/27af0f07-c917-4990-99a4-23a1cf2a8341


---

## 📌 Conclusion

Ce TP permet de comprendre les hooks avancés de React et de créer des composants plus puissants, réutilisables et bien structurés.

Il constitue une base essentielle pour développer des applications React modernes.

---
