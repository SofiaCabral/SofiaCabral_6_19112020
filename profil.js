//DOM ELEMENTS


const $containerPersonalInformations = document.querySelector("#container-personal-informations");



//requete$containerPersonalInformations
let requestURL = "/data.json";
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
 <div id="container-picture-profil">
    <img src="Images/PhotographersPictures/${photographerData.portrait}" alt="">
   </div>     
        `
            //Affichage des medias

        //Selectionner photographe en fonction de l'id du url
        // const photographerDataMedia = data.media.find((dataOnePhotographerMedia) => dataOnePhotographerMedia.id == onlyId);
        // console.log(photographerDataMedia);





    } else { //si non, afficher le message d'erreur 
        console.log(request.status);
    }
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})