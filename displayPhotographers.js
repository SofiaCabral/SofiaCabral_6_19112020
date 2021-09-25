//DOM ELEMENTS
//variable pour le contenu de la page d'accueil
const $containerPhotographersList = document.querySelector("#container-photographers-list");
const $tagsContainer = document.querySelector(".tags-container");




//requete
let requestURL = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.send();

//au chargerment de la page
request.addEventListener("load", () => {
    data = JSON.parse(request.response); //transgormer json en js en stocker en data
    if (request.status == 200 || request.status == 201) { //si tout se passe bien




        //boucle qui prends les valeurs qui sont sur le json, parcours tous les photgraphers 
        data.photographers.forEach(({ name, city, country, tagline, price, portrait, id, tags }) => {



            let tagsHTML = `<ul class="tags-container">`;

            //affichage des all-tags
            tags.forEach(tag => {

                tagsHTML += `<li class="tags">#${tag}</li>`
            });
            //peut etre pour pas écraser le resultat de l'autre variable
            //ul + </ul>
            tagsHTML += `</ul>`;
            // console.log(tags);
            // all-tagsHTML =  all-tagsHTML + "</ul>";
            //innertext plus clés
            //transmissions de donnees par url
            $containerPhotographersList.innerHTML += `
            <section class="photographers-list">
            <div class="photographers-pictures">
            <a href="./profil.html?${id}">
            <img src="Images/PhotographersPictures/${portrait}" alt="">
          
            </div>
           
            <div class="photographers-description">
            <h2>${name}</h2>
            </a>
            <p class="city-country">${city} , ${country}</p>
            <p>${tagline}</p>
            <p class="price">${price}/jour€</p>
            </div>
            ${tagsHTML}
            </section>
            `

        });




    } else { //si non, afficher le message d'erreur 
        console.log(request.status);
    }
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})



// const photographerData = data.photographers.find((id) => id === onlyId);