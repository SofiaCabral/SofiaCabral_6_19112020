// TOUTES LES TAGS
//ul dedans la nav des tags (ul)
const $tagsContainer = document.querySelector(".tags-container");

//REQUETE
fetch('/data/data.json').then(response => {
    return response.json();
}).then(data => {


    // TOUTES LES TAGS EN EXEMPLAIRE(un exemplaire de chaque tag reste stockés dans une variable )
    //Tableu qui contiendra un seul exemplaire de chaque tag
    let onlyOneTag = [];
    //affichage de tous les tahs
    let tagsHTML = `<ul class="tags-container">`;
    //parcourir les tags de tous les personnages 
    data.photographers.forEach(({ tags }) => {
        //parcourir chaque tag 
        tags.forEach(tag => {
            //pour afficher dans la liste de la nav
            tagsHTML += `<li class="tags">#${tag}</li>`
                //s'il n'a pas la tag dans le tableau, nous l'ajoutons
            if (!onlyOneTag.includes(tag)) {
                //ne pas mettre la tag 'sports"
                if (tag != 'sports') {
                    //on la met sur le tableau vide du depart
                    onlyOneTag.push(tag);
                }
            }
        });
    });
    tagsHTML += `</ul>`;



    //TAGS FILTRES EN FONCTION DE LA TAGQ QU ON CLIQUE
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
        $button.addEventListener("click", () => {
            //renvoie tous les photgraphes grace à filter qui ont la tag(includes) qu'on a cliqué
            const filteredPhotographers = data.photographers.filter((photographer) => {


                return photographer.tags.includes(tag);
            });
            //appeller fonction 
            displayPhotographersList(filteredPhotographers);

        });

    });


    //AFFICHAGE DES PHOTOGRAPHERS QUI SONT FILTRES PAR LA TAG CLIQUE
    function displayPhotographersList(photographersList) {

        //vider la section des photographers(à chaque foi qu'on clique)
        $containerPhotographersList.innerHTML = "";
        //parcourir la liste des photographes filtrés 

        photographersList.forEach(photographer => {

            //TAGS DE CHAQUE PHOTOGRAPHE dans la vignette
            //variable avec les tags de chaque photographe 
            tagsHTML = `<ul class="tags-container">`;
            photographer.tags.forEach(tag => {
                tagsHTML += `<li class="tags">#${tag}</li>`
            });
            tagsHTML += `</ul>`;

            //AFFICHER DES VIGNETTES DE PHOTOGRAPHES QUI SONT FILTRES
            $containerPhotographersList.innerHTML += `
                    <section class="photographers-list">
                    <div class="photographers-pictures">
                    <a href="./profil.html?${photographer.id}">
                    <img src="Images/PhotographersPictures/${photographer.portrait}" alt="">
                    </a>
                    </div>
                
                    <div class="photographers-description">
                    <h2>${photographer.name}</h2>
                    <p class="city-country">${photographer.city} , ${photographer.country}</p>
                    <p>${photographer.tagline}</p>
                    <p class="price">${photographer.price}/jour€</p>
                    </div>
                    ${tagsHTML}
                    </section>
                     `;
        });
    }




}).catch(err => {
    // Do something for an error here
    console.log(err);
});