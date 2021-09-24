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

        //Tableu qui contiendra un seul exemplaire de chaque tag
        let onlyOneTag = [];


        //boucle qui prends les valeurs qui sont sur le json, parcours tous les photgraphers 
        data.photographers.forEach(({ name, city, country, tagline, price, portrait, id, tags }) => {

            //parcourir les tags 
            tags.forEach(tag => {
                //s'il n'a pas la tag dans le tableau, nous l'ajoutons
                if (!onlyOneTag.includes(tag)) {
                    //on la met sur le tableau vide du depart
                    onlyOneTag.push(tag);
                }
            });


            let tagsHTML = `<ul class="tags-container">`;

            //affichage des all-tags
            tags.forEach(tag => {
                tagsHTML += `<li class="tags">#${tag}</li>`
            });
            //peut etre pour pas écraser le resultat de l'autre variable
            //ul + </ul>
            tagsHTML += `</ul>`;
            // all-tagsHTML =  all-tagsHTML + "</ul>";
            //innertext plus clés
            //transmissions de donnees par url
            $containerPhotographersList.innerHTML += `
            <section class="photographers-list">
            <div class="photographers-pictures">
            <a href="./profil.html?${id}">
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

        //Parcourir le tableau des tags uniques
        //ranger les elements par ordre alphabethique 
        onlyOneTag.sort().forEach(tag => {
            //creer une li
            const $li = document.createElement("li");

            //ajouter le li dans le ul 
            $tagsContainer.appendChild($li);
            //creer un bouton
            const $button = document.createElement("button");
            //et mettre dedans la list
            $li.appendChild($button);
            //ajouter la tag dans le texte du bouton    
            $button.innerText = '#' + tag;
            //Ajouter une class au button
            $button.classList.add("tags");
            //quand on clique sur le bouton


        });

        // console.log(onlyOneTag);

    } else { //si non, afficher le message d'erreur 
        console.log(request.status);
    }
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})



// const photographerData = data.photographers.find((id) => id === onlyId);