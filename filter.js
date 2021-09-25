//au chargerment de la page
request.addEventListener("load", () => {
    data = JSON.parse(request.response); //transgormer json en js en stocker en data
    if (request.status == 200 || request.status == 201) { //si tout se passe bien


        //TOUTES LES TAGS
        //Tableu qui contiendra un seul exemplaire de chaque tag
        let onlyOneTag = [];
        //affichage des all-tags
        let tagsHTML = `<ul class="tags-container">`;
        //boucle qui prends les valeurs qui sont sur le json, parcours tous les photgraphers 
        data.photographers.forEach(({ tags }) => {

            //parcourir les tags 
            tags.forEach(tag => {

                tagsHTML += `<li class="tags">#${tag}</li>`

                //s'il n'a pas la tag dans le tableau, nous l'ajoutons
                if (!onlyOneTag.includes(tag)) {
                    //on la met sur le tableau vide du depart
                    onlyOneTag.push(tag);
                }
            });


        });

        //peut etre pour pas écraser le resultat de l'autre variable
        //ul + </ul>
        tagsHTML += `</ul>`;





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


                //ça renvoie tous les photgraphes grace à filter qui ont la tag(includes) qu'on a cliqué
                const filteredPhotographers = data.photographers.filter((photographer) => {


                    return photographer.tags.includes(tag);
                });
                displayPhotographersList(filteredPhotographers);

            });

        });


        //deuxieme partie, affichage des photographers 
        function displayPhotographersList(photographersList) {

            //vider la section des photographers
            $containerPhotographersList.innerHTML = "";
            //parcourir la liste des photographes filtres 
            //pour chaque photographer 
            photographersList.forEach(photographer => {
                let tagsHTML = `<ul class="tags-container">`;

                //affichage des all-tags
                photographer.tags.forEach(tag => {
                    tagsHTML += `<li class="tags">#${tag}</li>`
                });
                //peut etre pour pas écraser le resultat de l'autre variable
                //ul + </ul>
                tagsHTML += `</ul>`;
                //afficher ses info
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

    } else { //si non, afficher le message d'erreur 
        console.log(request.status);
    }
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})