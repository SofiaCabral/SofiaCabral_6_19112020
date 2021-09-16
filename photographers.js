//DOM ELEMENTS
//variable pour le contenu de la page d'accueil
const $containerPhotographersList = document.querySelector("#container-photographers-list");
//variable pour l'header de la page de profil des photographers
const $containerPersonalInformations = document.querySelector("#container-personal-informations");

//requete
let requestURL = '/Data/data.json';
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.send();

//au chargerment de la page
request.addEventListener("load", () => {

    if (request.status == 200 || request.status == 201) { //si tout se passe bien
        data = JSON.parse(request.response); //transgormer json en js en stocker en data

        //boucle qui prends les valeurs qui sont sur le json
        data.photographers.forEach(({ name, city, country, tagline, price, portrait, id, tags }) => {
            let tagsHTML = `<ul class="tags-container">`;
            //Code pour la page INDEX.HTML
            //affichage des tags
            tags.forEach(tag => {
                tagsHTML += `<li class="tags">#${tag}</li>`
            });
            //peut etre pour pas écraser le resultat de l'autre variable
            //ul + </ul>
            tagsHTML += `</ul>`;
            // tagsHTML =  tagsHTML + "</ul>";
            //innertext plus clés
            //transmissions de donnees par url
            $containerPhotographersList.innerHTML += `
            <section class="photographers-list">
            <div class="photographers-pictures">
            <a href="/profil.html?id=${id}">
            <img src="Images/PhotographersPictures/${portrait}" alt="">
            </a>
            </div>
           
            <div class="photographers-description">
            <h2>${name}</h2>
            <p class="city-country">${city} , ${country}</p>
            <p>${tagline}</p>
            <p class="price">${price}/jour€</p>
            </div>
            ${tagsHTML}
            </section>
            `
        });

        const idURL = window.location.search;
        console.log(idURL);


        //PHOTOGRAPHERS-PROFIL.HTML

        // if (id == id) {
        //     $containerPersonalInformations = `
        //     <h3>${name}</h3>
        //     <p class="city-country">${city} , ${country}</p>
        //     <p>${tagline}</p>

        //     `
        // }

    } else { //si non, afficher le message d'erreur 
        console.log(request.status);
    }
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})



let idURL = window.location.search;
console.log(idURL);

// let data = request.response;
// let photographesdata = JSON.parse(data);