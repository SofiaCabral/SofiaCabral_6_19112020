//DOM ELEMENTS


const $containerPersonalInformations = document.querySelector("#container-personal-informations");
let $containerMedias = document.querySelector("#container-medias");
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
    <img id="photo-profil" src="Images/PhotographersPictures/${photographerData.portrait}" alt="">
   </div>     
        `



        //trouver les id du photographer sur les media du json qui correspond a l'id recupere dans l'url
        //filter permet de recuperer plusieurs elemets 
        const photographerMedia = data.media.filter((dataOnePhotographerMedia) => dataOnePhotographerMedia.photographerId == onlyId);

        //let du filtage titre
        let orderMediasSelect = document.querySelector("#order-medias-select");

        //ORDRE ALPHABETIQUE 
        // photographerMedia.sort(function(a, b) {
        //     return a.title.localeCompare(b.title);
        // });

        //ORDRE POPULARITE plus de likes à moins
        // photographerMedia.sort(function(a, b) {
        //     return b.likes - a.likes;
        // });

        //ORDRE DATE, plus recente à plus ancienne
        // photographerMedia.sort(function(a, b) {
        //     return new Date(b.date) - new Date(a.date);
        // });

        console.log(photographerMedia);

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
            $containerMedias.innerHTML += `
            <section class="medias-section">

                <div class="image-medias-container">
                    <a href=""><img class="img-medias" src="${imagePath}" alt=""></a>
                </div>

                <div class="description-medias">
                    <p>${media.title}</p>
                    <div class="container-likes">
                        <p class="like">${media.likes}</p>
                        <i class="fas fa-heart medias-heart"></i>
                    </div>

                </div>
            </section>
            `

            orderMediasSelect.addEventListener("change", () => {

                //popularite
                if (orderMediasSelect.selectedIndex == 0) {

                    console.log("0");

                    // affichage des medias
                    $containerMedias.innerHTML = $containerMedias.innerHTML.replace(`
                        <section class="medias-section">

                            <div class="image-medias-container">
                                <a href=""><img class="img-medias" src="${imagePath}" alt=""></a>
                            </div>

                            <div class="description-medias">
                                <p>${media.title}</p>
                                <div class="container-likes">
                                    <p class="like">${media.likes}</p>
                                    <i class="fas fa-heart medias-heart"></i>
                                </div>

                            </div>
                        </section>
                        `)
                        //date
                } else if (orderMediasSelect.selectedIndex == 1) {
                    console.log("1");
                    // affichage des medias
                    $containerMedias.innerHTML = $containerMedias.innerHTML.replace(`
                   <section class="medias-section">

                       <div class="image-medias-container">
                           <a href=""><img class="img-medias" src="${imagePath}" alt=""></a>
                       </div>

                       <div class="description-medias">
                           <p>${media.title}</p>
                           <div class="container-likes">
                               <p class="like">${media.likes}</p>
                               <i class="fas fa-heart medias-heart"></i>
                           </div>

                       </div>
                   </section>
                   `)
                        //titre

                } else if (orderMediasSelect.selectedIndex == 2) {
                    console.log("2");
                    // affichage des medias


                    // console.log(photographerMedia);



                    // console.log(media);


                    $containerMedias.innerHTML = $containerMedias.innerHTML.replace(`
                <section class="medias-section">

                    <div class="image-medias-container">
                        <a href=""><img class="img-medias" src="${imagePath}" alt=""></a>
                    </div>

                    <div class="description-medias">
                        <p>${media.title}</p>
                        <div class="container-likes">
                            <p class="like">${media.likes}</p>
                            <i class="fas fa-heart medias-heart"></i>
                        </div>

                    </div>
                </section>
                `)
                        // let test;
                        // test = photographerMedia.title.sort();
                        // console.log(test);


                }


            });






        });








        //AUGMENTER LES LIKES
        // const mediasHeart = document.querySelector(".medias-heart");

        // // numero de like qui est dedans le paragraphe
        // let like = document.querySelector(".like").innerHTML;

        // // buttonHeart.addEventListener("click", () => {

        // //     like++;
        // //     likeParagraphe.innerHTML = like;
        // //     console.log(like);
        // // let test;
        // photographerMedia.forEach((media, i) => {
        //     // test = media;



        //     mediasHeart.addEventListener("click", () => {
        //         // test++;

        //         console.log(media[i]);





        //     });

        // });
        //Ajout de la lightbox 
        //conteneur de l'image des medias
        // const containerImageMedias = document.querySelector("#container-image-medias");

        // const imgMedias = document.querySelector("#img-medias");
        // imgMedias.addEventListener('click', openLightBox);



        // //fonction de validation de formulaire
        // function openLightBox() {



        // }

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
            //MODAL
            //conteneur modal 
        const $modalContainer = document.querySelector("#modal-container");

        $modalContainer.innerHTML += `

            <div id="modal-content">
            <button id="close-modal-button"><i class="fas fa-times"></i></button>
            <div id="form-container">
                <form name="contact" action="index.html" method="get">
                    <!-- <div id="container-title"> -->
                    <h1>Contactez-moi <br /> ${photographerData.name} </h1>


                    <!-- </div> -->
                    <div class="formData-container">
                        <label for="first-name">Prénom</label><br />
                        <input class="input-text-style" type="text" id="first-name" name="firstName" /><br />

                    </div>
                    <div class="formData-container">
                        <label for="last">Nom</label><br />
                        <input class="input-text-style" type="text" id="last" name="last" /><br />

                    </div>
                    <div class="formData-container">
                        <label for="email">E-mail</label><br />
                        <input class="input-text-style" type="email" id="email" name="email" /><br />

                    </div>
                    <div class="formData-container">
                        <label for="message">Votre message</label><br />
                        <textarea class="input-text-style" name="message" id="message"></textarea>
                    </div>
                    <div id="button-submit-container">
                        <input id="button-submit" type="submit" value="Envoyer" />
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







    } else { //si non, afficher le message d'erreur 
        console.log(request.status);
    }
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})