//DOM ELEMENTS


const $containerPersonalInformations = document.querySelector("#container-personal-informations");
let $containerMedias = document.querySelector("#container-medias");
const $aside = document.querySelector("#aside");
const $closeLightBox = document.querySelector("#close-light-box");

// class LightBox {
//     constructor(photographerData) {
//         this.photographerData = photographerData;
//     }

//     displayLightBox(i) {
//         //prendre les noms avant l'espace pour pouvoir trouver le dossier 
//         const folderPhotographerName = this.photographerData.name.split(" ")[0]
//         lightBoxIndex = i;

//         //cherhcer l'image dans le folder 
//         imagePath = `images/${folderPhotographerName}/${photographerMedia[i].image}`; // image media du photograher
//         $imageLightBox.src = imagePath;
//         lightBox.style.display = 'block';
//         goToTheRight();
//         goToTheLeft();

//     }

//     closeLightBox() {
//         lightBox.style.display = 'none';
//     }
//     goToTheRight() {
//         lightBoxRightButton.addEventListener('click', () => {
//             if (lightBoxIndex < photographerMedia.length - 1) {

//                 // photographerMedia.forEach((m, i, a) => {
//                 console.log(lightBoxIndex);
//                 // if (i < a) {
//                 lightBoxIndex++;
//                 if (!photographerMedia[lightBoxIndex].image) {
//                     imagePath = `images/logo/logo.png`;
//                 } else {
//                     imagePath = `images/${folderPhotographerName}/${photographerMedia[lightBoxIndex].image}`;

//                 }


//                 $imageLightBox.src = imagePath;
//                 // }
//             };


//             console.log(imagePath);
//             console.log($imageLightBox.src);

//             // }
//         });
//     }




//     goToTheLeft() {
//         lightBoxLeftButton.addEventListener('click', () => {
//             console.log(lightBoxIndex);
//             if (lightBoxIndex > 0) {

//                 lightBoxIndex--;
//                 if (!photographerMedia[lightBoxIndex].image) {
//                     imagePath = `images/logo/logo.png`;
//                 } else {
//                     imagePath = `images/${folderPhotographerName}/${photographerMedia[lightBoxIndex].image}`;

//                 }

//                 $imageLightBox.src = imagePath;
//                 console.log(photographerMedia[lightBoxIndex]);

//             }
//         });
//     }
// }

// likeButton.addEventListener("click", (e) => {
//     //Prendre le contenu du paragraphe et le stocker dans une nouvelle variable
//     likeNumber.forEach(element => {

//         likeNumberTextContent.push(element.textContent);

//     });
//     likeNumberTextContent.forEach(element => {
//         element++;
//         likeNumberAddition.push(element);
//     });
//     console.log(likeNumberAddition);
//     console.log(e.target);

// });


// function displayLightBox(i) {
//     //prendre les noms avant l'espace pour pouvoir trouver le dossier 
//     const folderPhotographerName = this.photographerData.name.split(" ")[0]
//     lightBoxIndex = i;

//     //cherhcer l'image dans le folder 
//     imagePath = `images/${folderPhotographerName}/${photographerMedia[i].image}`; // image media du photograher
//     $imageLightBox.src = imagePath;
//     lightBox.style.display = 'block';
//     goToTheRight();
//     goToTheLeft();

// }

// function closeLightBox() {
//     lightBox.style.display = 'none';
// }

// function goToTheRight() {
//     lightBoxRightButton.addEventListener('click', () => {
//         if (lightBoxIndex < photographerMedia.length - 1) {

//             // photographerMedia.forEach((m, i, a) => {
//             console.log(lightBoxIndex);
//             // if (i < a) {
//             lightBoxIndex++;
//             if (!photographerMedia[lightBoxIndex].image) {
//                 imagePath = `images/logo/logo.png`;
//             } else {
//                 imagePath = `images/${folderPhotographerName}/${photographerMedia[lightBoxIndex].image}`;

//             }


//             $imageLightBox.src = imagePath;
//             // }
//         };


//         console.log(imagePath);
//         console.log($imageLightBox.src);

//         // }
//     });
// }




//     goToTheLeft() {
//         lightBoxLeftButton.addEventListener('click', () => {
//             console.log(lightBoxIndex);
//             if (lightBoxIndex > 0) {

//                 lightBoxIndex--;
//                 if (!photographerMedia[lightBoxIndex].image) {
//                     imagePath = `images/logo/logo.png`;
//                 } else {
//                     imagePath = `images/${folderPhotographerName}/${photographerMedia[lightBoxIndex].image}`;

//                 }

//                 $imageLightBox.src = imagePath;
//                 console.log(photographerMedia[lightBoxIndex]);

//             }
//         });
//     }
// }



//Pour stocker les donnees personnelles d'un photographer 
let photographerMedia;

//Pour stocker medias d'un photographer 
let photographerData;

//balise image dedans la light box 
const $imageLightBox = document.querySelector("#light-box img");
const lightBox = document.querySelector("#light-box");
let folderPhotographerName;

let imagePath;

const lightBoxRightButton = document.querySelector('#light-box-right-button');
const lightBoxLeftButton = document.querySelector('#light-box-left-button');
let lightBoxIndex = -1;
//on prends l'index 
function displayLightBox(i) {
    //prendre les noms avant l'espace pour pouvoir trouver le dossier 
    folderPhotographerName = photographerData.name.split(" ")[0]
    lightBoxIndex = i;

    //cherhcer l'image dans le folder 
    imagePath = `images/${folderPhotographerName}/${photographerMedia[i].image}`; // image media du photograher
    $imageLightBox.src = imagePath;
    lightBox.style.display = 'block';
    goToTheRight();
    goToTheLeft();

}

function closeLightBox() {
    lightBox.style.display = 'none';
}

function goToTheRight() {
    lightBoxRightButton.addEventListener('click', () => {
        if (lightBoxIndex < photographerMedia.length - 1) {

            // photographerMedia.forEach((m, i, a) => {
            console.log(lightBoxIndex);
            // if (i < a) {
            lightBoxIndex++;
            if (!photographerMedia[lightBoxIndex].image) {
                imagePath = `images/logo/logo.png`;
            } else {
                imagePath = `images/${folderPhotographerName}/${photographerMedia[lightBoxIndex].image}`;

            }


            $imageLightBox.src = imagePath;
            // }
        };


        console.log(imagePath);
        console.log($imageLightBox.src);

        // }
    });
}

function goToTheLeft() {
    lightBoxLeftButton.addEventListener('click', () => {
        console.log(lightBoxIndex);
        if (lightBoxIndex > 0) {

            lightBoxIndex--;
            if (!photographerMedia[lightBoxIndex].image) {
                imagePath = `images/logo/logo.png`;
            } else {
                imagePath = `images/${folderPhotographerName}/${photographerMedia[lightBoxIndex].image}`;

            }

            $imageLightBox.src = imagePath;
            console.log(photographerMedia[lightBoxIndex]);

        }
    });
}

// touches fléchées pour naviguer entre les médias. 
window.addEventListener("keydown", e => {
        if (e.code == "ArrowRight") {
            if (lightBoxIndex < photographerMedia.length - 1) {

                lightBoxIndex++;
                if (!photographerMedia[lightBoxIndex].image) {
                    imagePath = `images/logo/logo.png`;
                } else {
                    imagePath = `images/${folderPhotographerName}/${photographerMedia[lightBoxIndex].image}`;

                }


                $imageLightBox.src = imagePath;

            };
        } else if (e.code == "ArrowLeft") {

            if (lightBoxIndex > 0) {

                lightBoxIndex--;
                if (!photographerMedia[lightBoxIndex].image) {
                    imagePath = `images/logo/logo.png`;
                } else {
                    imagePath = `images/${folderPhotographerName}/${photographerMedia[lightBoxIndex].image}`;

                }

                $imageLightBox.src = imagePath;
                console.log(photographerMedia[lightBoxIndex]);

            }

        }
    })
    // AUGMENTER LES LIKES

function moreLike(i) {

    //ajouter un like
    photographerMedia[i].likes++;
    //afficher dedans le paragraphe 
    likeNumber[i].textContent = photographerMedia[i].likes;

}



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
        photographerData = data.photographers.find((dataOnePhotographer) => dataOnePhotographer.id == onlyId);

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
        photographerMedia = data.media.filter((dataOnephotographer) => dataOnephotographer.photographerId == onlyId);


        let imagePath;
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
            $containerMedias.innerHTML += `
            <section class="medias-section">

                <div class="image-medias-container">
                <!--quand on clique sur l'image, on declence la function pour afficher la light box -->
                   <img class="img-medias" src="${imagePath}" alt="" onclick="displayLightBox(${i})">
                </div>

                <div class="description-medias">
                    <p>${media.title}</p>

                    <div class="container-likes">
                    
                        <p class="like">${media.likes}</p>
                        <button class="like-button" onclick="moreLike(${i})"><i class="fas fa-heart medias-heart"></i></button>
                    </div>

                </div>
            </section>
            `
        });
        //paragraphe qui contient les likes de chaque media
        likeNumber = document.querySelectorAll(".like");
        //FILTRAGE DES MEDIAS /CHANGEMENT D ORDRE
        let orderMediasSelect = document.querySelector("#order-medias-select");
        console.log(orderMediasSelect.selectedIndex);
        orderMediasSelect.addEventListener("change", () => {
            $containerMedias.innerHTML = "";

            //POPULARITE 
            if (orderMediasSelect.selectedIndex == 0) {
                console.log('0');
                //ORDRE POPULARITE plus de likes à moins
                photographerMedia.sort(function(a, b) {
                    return b.likes - a.likes;
                });



            }
            //DATE 
            if (orderMediasSelect.selectedIndex == 1) {

                console.log("1");
                //ORDRE DATE, plus recente à plus ancienne
                photographerMedia.sort(function(a, b) {
                    return new Date(b.date) - new Date(a.date);
                });


            }
            //TITRE
            if (orderMediasSelect.selectedIndex == 2) {

                console.log("2");
                //ORDRE ALPHABETIQUE 
                photographerMedia.sort(function(a, b) {
                    return a.title.localeCompare(b.title);
                });


            }


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
                            <button class ="like-button" onclick="moreLike()"><i class="fas fa-heart medias-heart"></i></button>

                        </div>
    
                    </div>
                </section>
                `
            });


        });







        // photographerMedia.forEach((media, i) => {
        //     console.log(likeNumber);
        //     // like++;
        //     //     likeParagraphe.innerHTML = like;
        //     //     console.log(like);
        //     // let test;
        //     // photographer.forEach((media, i) => {
        //     // test = media;
        // });
        // });


        // mediasHeart.addEventListener("click", () => {
        //     // test++;

        //     console.log('ok');
        // //AUGMENTER LES LIKES
        // const mediasHeart = document.querySelector(".medias-heart");

        // // numero de like qui est dedans le paragraphe
        // // let like = document.querySelector(".like").innerHTML;

        // buttonHeart.addEventListener("click", () => {

        //     like++;
        //     likeParagraphe.innerHTML = like;
        //     console.log(like);


        // });

        //NUMERO TOTAL DE LIKES 
        //tableau qui contiendra tous les likes
        let likesTable = [];
        // let like = document.querySelector(".medias-heart");
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
         
            <div id="form-container">
                <form name="contact" action="index.html" method="get">
                  <div id="modal-container-title"> 
                    <h1>Contactez-moi <br /> ${photographerData.name} </h1>
                    <button id="close-modal-button"><i class="fas fa-times"></i></button>

                     </div>
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
        buttonSubmit.addEventListener('click', getValue);

        //fonction de validation de formulaire
        function getValue(e) {
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