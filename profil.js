//DOM ELEMENTS
//header qui contient les informations d'un photographer
const $containerPersonalInformations = document.querySelector("#container-personal-informations");
//article qui contient les medias
let $containerMedias = document.querySelector("#container-medias");
//div qui contient toute la lightbox
const lightBox = document.querySelector("#light-box");
//image de la lightbox
const $imageLightBox = document.querySelector("#light-box img");
//bouton pour fermer lightbox
const $closeLightBox = document.querySelector("#close-light-box");
//bouton pour aller à droite (lightbox)
const lightBoxRightButton = document.querySelector('#light-box-right-button');
//bouton pour aller à gauche (lightbox)
const lightBoxLeftButton = document.querySelector('#light-box-left-button');
//aside 
const $aside = document.querySelector("#aside");

let light_Box;
//Pour stocker les donnees personnelles d'un photographer 
let photographerMedia;
//Pour stocker medias d'un photographer 
let photographerData;
//balise image dedans la light box 

// AUGMENTER LES LIKES
function moreLike(i) {
    //ajouter un like
    photographerMedia[i].likes++;
    //afficher dedans le paragraphe 
    likeNumber[i].textContent = photographerMedia[i].likes;
}

//REQUETE


//au chargerment de la page

fetch('/data/data.json').then(response => {
    return response.json();
}).then(data => {

    //Récupearation de l'id dans l'url
    const idURL = window.location.search;
    //enlever le ? et garder que l'id
    const onlyId = idURL.slice(1);
    //Selectionner photographe en fonction de l'id du url
    //find permet de recuperer le premier element
    photographerData = data.photographers.find((dataOnePhotographer) => dataOnePhotographer.id == onlyId);

    //prendre les tags du photographer
    let tagsHTML = `<ul id="tags-container-photographers">`;
    photographerData.tags.forEach(tag => {
        tagsHTML += `<li class="all-tags">#${tag}</li>`
    });
    tagsHTML += `</ul>`;

    //AFFICHAGE DES COORDONNEES DU PHOTOGRAPHE
    $containerPersonalInformations.innerHTML = `
        <div id="photographer-description">
        <h1>${photographerData.name}</h1>
        <p id="city-country-photographer">${photographerData.city},${photographerData.country} </p>
        <p id="tagline-photographer">${photographerData.tagline}</p>
        ${tagsHTML}
    </div>

    <div id="container-button">
    <button type="button" id="button-contact">Contactez-Moi</button>
    </div>

 <div id="container-picture-profil">
    <img id="photo-profil" src="Images/PhotographersPictures/${photographerData.portrait}" alt="">
   </div>     
        `

    //trouver les id du photographer sur les media du json qui correspondondent  a l'id recupere dans l'url
    //filter permet de recuperer plusieurs elemets 
    photographerMedia = data.media.filter((dataOnephotographer) => dataOnephotographer.photographerId == onlyId);

    //pour stocker les lien vers les images
    let imagePath;
    //pour stocker le dossier de chaque photographe
    let folderPhotographerName;
    //ORDRE DES MEDIAS PAR DEFAUT 
    photographerMedia.forEach((media, i_) => {
        const i = i_;
        //s'il c'est une image
        if (media.image) {
            //Garder que le premier prenom/premiere chaine de caractere, avant l'espace
            folderPhotographerName = photographerData.name.split(" ")[0];
            //liens vers l'image
            imagePath = `images/${folderPhotographerName}/${media.image}`;
        } else {
            //si ce n'est pas une image, afficher le logo
            imagePath = `images/logo/logo.png`;
        }
        //AFFICHAGE DES MEDIAS 
        //light_Box.display(${i}) pour ouvir la lightbox
        //moreLike(${i})) pour augmenter le numero de like
        $containerMedias.innerHTML += `
            <section class="medias-section">

                <div class="image-medias-container">
                   <img class="img-medias" src="${imagePath}" alt="" onclick="light_Box.display(${i})">
                </div>

                <div class="description-medias">
                    <p>${media.title}</p>

                    <div class="container-likes">
                    
                        <p class="like">${media.likes}</p>
                        <button type="button" title="coeur pour mettre un j'aime" class="like-button" onclick="moreLike(${i})"><em class="fas fa-heart medias-heart"></em></button>
                    </div>

                </div>
            </section>
            `
    });
    //paragraphe qui contient les likes de chaque media
    likeNumber = document.querySelectorAll(".like");

    //FILTRAGE DES MEDIAS /CHANGEMENT D ORDRE
    //select 
    let orderMediasSelect = document.querySelector("#order-medias-select");
    orderMediasSelect.addEventListener("change", () => {
        //vider le contenu
        $containerMedias.innerHTML = "";
        //ORDRE DES MEDIAS PAR POPULARITE
        if (orderMediasSelect.selectedIndex == 0) {
            //ORDRE POPULARITE plus de likes à moins
            photographerMedia.sort(function(a, b) {
                return b.likes - a.likes;
            });
        }
        //ORDRE DES MEDIAS PAR DATE 
        if (orderMediasSelect.selectedIndex == 1) {
            //ORDRE DATE, plus recente à plus ancienne
            photographerMedia.sort(function(a, b) {
                return new Date(b.date) - new Date(a.date);
            });
        }
        //ORDRE DES MEDIAS PAR TITRE
        if (orderMediasSelect.selectedIndex == 2) {
            //ORDRE ALPHABETIQUE 
            photographerMedia.sort(function(a, b) {
                return a.title.localeCompare(b.title);
            });
        }
        //AFFICHAGE DES MEDIAS 
        photographerMedia.forEach(media => {
            //s'il c'est une image
            if (media.image) {
                //Garder que le premier prenom/premiere chaine de caractere, avant l'espace
                folderPhotographerName = photographerData.name.split(" ")[0];
                //liens vers l'image
                imagePath = `images/${folderPhotographerName}/${media.image}`;
            } else {
                //si ce n'est pas une image, afficher le logo
                imagePath = `images/logo/logo.png`;
            }
            $containerMedias.innerHTML += `
                <section class="medias-section">
    
                    <div class="image-medias-container">
                      <img class="img-medias" src="${imagePath}" alt="">

                      
                    </div>
    
                    <div class="description-medias">
                        <p>${media.title}</p>
                        <div class="container-likes">
                            <p class="like">${media.likes}</p>
                            <button type="button" class ="like-button"  title="coeur pour mettre un j'aime"  onclick="moreLike()"><i class="fas fa-heart medias-heart"></i></button>

                        </div>
    
                    </div>
                </section>
                `
        });
    });

    //NUMERO TOTAL DE LIKES 
    //tableau qui contiendra tous les likes
    let likesTable = [];
    //parcourir le tableau des medias
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

    //ASIDE
    $aside.innerHTML += `     
            <div id="container-aside-likes">
            <p>${totalLikes}</p>
<div class="container-likes">
            <em class="fas fa-heart"></em>
            </div>
        </div>
        <div id="container-aside-price">
            <p>${photographerData.price}/jour€</p>
        </div>

        `
        //MODAL
        //conteneur modal 
    const $modalContainer = document.querySelector("#modal-container");
    //Affichage du contenu de la modal
    $modalContainer.innerHTML += `
        <div role="form" id="contact-info" aria-label="Contact information">
            <div id="modal-content">
            <div id="form-container">
                <form class="form">
                  <div id="modal-container-title"> 
                    <h1>Contactez-moi <br /> ${photographerData.name} </h1>
                    <button  type="button" id="close-modal-button"  title="bouton pour fermer le formulaire"><i class="fas fa-times"></i></button>

                     </div>
                    <div class="formData-container">
                        <label for="first-name">Prénom</label><br />
                        <input class="input-text-style" type="text" id="first-name" aria-labelledby="first-name" name="firstName" title="champs pour ecrire le prenom" /><br />

                    </div>
                    <div class="formData-container">
                        <label for="last">Nom</label><br />
                        <input class="input-text-style" type="text" id="last"  aria-labelledby="last"  name="last" title="champs pour ecrire le nom" /><br />

                    </div>
                    <div class="formData-container">
                        <label for="email">E-mail</label><br />
                        <input class="input-text-style" type="email" id="email" aria-labelledby="email" name="email" title="champs pour ecrire l'e-mail" /><br />

                    </div>
                    <div class="formData-container">
                        <label for="message">Votre message</label><br />
                        <textarea class="input-text-style" name="message" id="message" aria-labelledby="message" title="champs pour ecrire le message"></textarea>
                    </div>
                    <div id="button-submit-container">
                        <input id="button-submit" type="submit" value="Envoyer" title="champs pour envoyer le formulaire"/>
                    </div>
                </form>
            </div>
        </div>
        `

    //BOUTON CONTACT
    //button contactez moi
    const buttonContact = document.querySelector("#button-contact");
    //toute la modal
    const modalContainer = document.querySelector("#modal-container");
    //button pour fermer la modal
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
    //PRENDRE VALEURS ET AFFICHER SUR LA CONSOLE
    //form  
    const form = document.querySelector(".form");
    //prenom
    const firstName = document.querySelector("#first-name");
    //nom        
    const last = document.querySelector("#last");
    //email
    const email = document.querySelector("#email");

    form.addEventListener('submit', getValue);

    function getValue(e) {
        e.preventDefault();
        //Affichage des values sur la console
        console.log(firstName.value);
        console.log(last.value);
        console.log(email.value);
    }

    //LIGHTBOX
    light_Box = new LightBox(photographerData, photographerMedia, $imageLightBox, lightBox, lightBoxRightButton, lightBoxLeftButton);

}).catch(err => {
    // Do something for an error here
    console.log(err);
});