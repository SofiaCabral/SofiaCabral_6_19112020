//DOM ELEMENTS


const $containerPersonalInformations = document.querySelector("#container-personal-informations");
const $containerMedias = document.querySelector("#container-medias");


//requete$containerPersonalInformations
let requestURL = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.send();

//au chargerment de la page
request.addEventListener("load", () => {
    data = JSON.parse(request.response); //transgormer json en js en stocker en data
    if (request.status == 200 || request.status == 201) { //si tout se passe bien



        //Récupearation de l'id dans l'url
        const idURL = window.location.search;
        //enlever le ? et garder que l'id
        const onlyId = idURL.slice(1);
        // console.log(onlyId);

        //Selectionner photographe en fonction de l'id du url
        //find permet de recuperer le premier element
        const photographerData = data.photographers.find((dataOnePhotographer) => dataOnePhotographer.id == onlyId);

        let tagsHTML = `<ul id="tags-container-photographers">`;

        //affichage des tags
        photographerData.tags.forEach(tag => {
            tagsHTML += `<li id="all-tags">#${tag}</li>`
        });
        //peut etre pour pas écraser le resultat de l'autre variable
        //ul + </ul>
        tagsHTML += `</ul>`;

        //affichage des coordonnees des photographers
        $containerPersonalInformations.innerHTML = `
        <div id="photographer-description">
        <h1>${photographerData.name}</h1>
        <p id="city-country-photographer">${photographerData.city},${photographerData.country} </p>
        <p id="tagline-photographer">${photographerData.tagline}</p>
        ${tagsHTML}
    </div>

    <div id="container-button">
    <button>Contactez-Moi</button>
    </div>

 <div id="container-picture-profil">
    <img src="Images/PhotographersPictures/${photographerData.portrait}" alt="">
   </div>     
        `


        //trouver les id du photographer sur les media du json qui correspond a l'id recupere dans l'url
        //filter permet de recuperer plusieurs elemets 
        const photographerMedia = data.media.filter((dataOnePhotographerMedia) => dataOnePhotographerMedia.photographerId == onlyId);


        //Ajout des medias 
        photographerMedia.forEach(e => {

            let imagePath;
            //s'il c'est une image
            if (e.image) {
                //Garder que le premier prenom/premiere chaine de caractere, avant l'espace
                const folderPhotographerName = photographerData.name.split(" ")[0];
                //liens vers l'image
                imagePath = `images/${folderPhotographerName}/${e.image}`;
            } else {
                //si ce n'est pas une image, afficher le logo
                imagePath = `images/logo/logo.png`;
            }

            // affichage des medias
            $containerMedias.innerHTML += `
    

          
            <section class="medias">
                <div class="image-medias">
                    <img src="${imagePath}" alt="">
                </div>
                <div class="description-medias">
                    <p>${e.title}</p>
                    <div class="container-likes">
                        <p>${e.likes}</p>
                        <i class="fas fa-heart"></i>
                    </div>

                </div>
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