document.addEventListener("DOMContentLoaded", () => {

    const films = [{
        titre: "Se7en",
        cover: "./asset/se7en.jpg",
        sortie: "1995",
        genre: "Thriller, crime, mystère",
        realisateur: "David Fincher",
        url: "https://fr.wikipedia.org/wiki/Seven_(film)"
    }, {
        titre: "Matrix",
        cover: "./asset/matrix.jpg",
        sortie: "1999",
        genre: "Science fiction, action",
        realisateur: "Soeurs Washowski",
        url: "https://fr.wikipedia.org/wiki/The_Matrix"
    }, {
        titre: "Memories of Murder",
        cover: "./asset/memories.jpg",
        sortie: "2004",
        genre: "Crime, thriller",
        realisateur: "Bong Joonh-ho",
        url: "https://en.wikipedia.org/wiki/Memories_of_Murder"
    }, {
        titre: "Dear Zindagi",
        cover: "./asset/zindagi.jpg",
        sortie: "2016",
        genre: "Drame, Romance",
        realisateur: "Gauri Shinde",
        url: "https://en.wikipedia.org/wiki/Dear_Zindagi"
    }];

    //console.table(films)

    for (let index = 0; index < films.length; index++) {
        const element = films[index];
        console.log(element.url);
    }

    /* autre solution possible
    for (data of films){
        console.log(data.titre)
    }*/

    let parent = document.querySelector(".primary-collection");
    let liste = document.createElement("ul");
    parent.appendChild(liste);

    //création d'un template pour les <li>, pour les injecter directement dans ma liste, sans devoir les créer un à un
    for (data of films) {

        console.log(`${data.titre}: ${data.realisateur}`);
        console.log(`${data.url} : ${data.cover}`);
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
                        </li>`;
    }
});