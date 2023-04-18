# Projet les classiques du cinéma
## Première étape:
### Création du manifeste des icones:
on télécharge l'icone, en on n'oublie pas de copier la partie 
```html
<link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png">
```
et de **surtout** mettre le bon chemin vers les icones
* on vérifie bien que le manfeste est bon.

## Deuxième étape:
### Ajout des classes "primary-collection"
pour cela, on passe par le JavaScript,
puis on fait un template scripting pour ajouter les éléments du "tableau"
comme ceci 
```js
    liste.innerHTML += `<li> <figure> 
                        <img src="${data.cover}" alt ="cover">
                        <figcaption>
                        <h2>${data.titre}</h2>
                        <p>${data.realisateur}</p>
                        <p>${data.genre}</p>
                        <p>${data.sortie}</p>
                        <p>
                        <a href="${data.url}">Pour en savoir plus</a></p>
                        </figcaption>
                        </li>`

```
### création de éléménts html
Il fallait au préalable créer les éléts html; la liste et la galerie, pour pouvoir y injecter les elets

## Troisième étape:

on stylise le tout avec css
j'ai choisis un display flex
et un display block pour la partie media