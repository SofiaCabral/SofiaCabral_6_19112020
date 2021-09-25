//DOM ELEMENTS


const $containerPersonalInformations = document.querySelector("#container-personal-informations");
const $containerMedias = document.querySelector("#container-medias");
const $aside = document.querySelector("#aside");


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
    <button id="button-contact">Contactez-Moi</button>
    </div>

 <div id="container-picture-profil">
    <img src="Images/PhotographersPictures/${photographerData.portrait}" alt="">
   </div>     
        `



        //trouver les id du photographer sur les media du json qui correspond a l'id recupere dans l'url
        //filter permet de recuperer plusieurs elemets 
        const photographerMedia = data.media.filter((dataOnePhotographerMedia) => dataOnePhotographerMedia.photographerId == onlyId);


        //Ajout des medias 
        photographerMedia.forEach(media => {

            let imagePath;
            //s'il c'est une image
            if (media.image) {
                //Garder que le premier prenom/premiere chaine de caractere, avant l'espace
                const folderPhotographerName = photographerData.name.split(" ")[0];
                //liens vers l'image
                imagePath = `images/${folderPhotographerName}/${media.image}`;
            } else {
                //si ce n'est pas une image, afficher le logo
                imagePath = `images/logo/logo.png`;
            }

            // affichage des medias
            $containerMedias.innerHTML += `
    

          
            <section class="medias">
            <div id="container-image-medias>
                <div class="image-medias">
                    <img src="${imagePath}" alt="">
                </div>
            </div>
                <div class="description-medias">
                    <p>${media.title}</p>
                    <div class="container-likes">
                        <p>${media.likes}</p>
                       <button id="button-heart"><i class="fas fa-heart heart"></i></button>
                    </div>

                </div>
            </section>
        `


        });


        //NUMERO TOTAL DE LIKES 
        //tableau qui contiendra tous les likes
        let likesTable = [];
        //parcourir le tableau
        photographerMedia.forEach(media => {
            //ajouter les likes dans le tableau
            likesTable.push(media.likes);
        });


        // tableau pour le total de likes
        let totalLikes = 0;
        //parcourir le tableau avec tous les likes 
        likesTable.forEach((like) => {
            //faire la somme de tous les likes du tableau 
            //et la stocker
            totalLikes = totalLikes + like;

        });




        $aside.innerHTML += `     
            <div id="container-aside-likes">
            <p>${totalLikes}</p>
<div class="container-likes">
            <i class="fas fa-heart"></i>
            </div>
        </div>
        <div id="container-aside-price">
            <p>${photographerData.price}/jour€</p>
        </div>

        `


        //BOUTON CONTACT
        //button contactez moi
        const buttonContact = document.querySelector("#button-contact");
        //toute la modal
        const modalContainer = document.querySelector("#modal-container");
        //button pour fermer
        const closeModalButton = document.querySelector("#close-modal-button");

        //Evenement sur le bouton contactez moi
        buttonContact.addEventListener("click", openModal);

        //ouvrir la modal
        function openModal() {
            modalContainer.style.display = "block";
        }

        //Evenement sur le bouton de fermer
        closeModalButton.addEventListener("click", closeModal);
        //fermer la modale
        function closeModal() {
            modalContainer.style.display = "none";
        }

        //afficher le resultat sur les logs
        //button sbmit
        const buttonSubmit = document.querySelector("#button-submit");
        const firstName = document.querySelector("#first-name");
        const last = document.querySelector("#last");
        const email = document.querySelector("#email");
        //evenement sur le bouton submit
        buttonSubmit.addEventListener('click', validationForm);



        //fonction de validation de formulaire
        function validationForm(e) {
            e.preventDefault();
            //Affichage des values sur la console
            console.log(firstName.value);
            console.log(last.value);
            console.log(email.value);


        }
        // //Au clic sur le bouton du coeur
        // const buttonHeart = document.querySelector("#button-heart");
        // console.log(buttonHeart);


        // buttonHeart.addEventListener("click", () => {
        //     //on parcourt le tableau avec tous les likes 
        //     likesTable.forEach((like) => {
        //         //on ajoute un


        //     });

        //     console.log(likesTable);


        // });




    } else { //si non, afficher le message d'erreur 
        console.log(request.status);
    }
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})