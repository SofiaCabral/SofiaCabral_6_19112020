//DOM ELEMENTS - PAGE INDEX 
//article qui contient les vignettes des photographes
const $containerPhotographersList = document.querySelector("#container-photographers-list");
//REQUETE
fetch('/data/data.json').then(response => {
    return response.json();
}).then(data => {
    // VIGNETTES DES PHOTOGRAPHES
    //boucle qui prends les valeurs qui sont sur le json, parcours tous les photgraphers 
    data.photographers.forEach(({ name, city, country, tagline, price, portrait, id, tags }) => {
        //TAGS DE CHAQUE PHOTOGRAPHE
        //creation d'une variable avec les tags de chaque photographe 
        let tagsHTML = `<ul class="tags-container">`;
        tags.forEach(tag => {
            //transformer la tag 'sports' en 'sport'
            if (tag == 'sports') {
                tag = 'sport';
            }
            tagsHTML += `<li class="tags">#${tag}</li>`

        });
        tagsHTML += `</ul>`; //fermer la ul

        //AFFICAHE DES VIGNETTES DES PHOTOGRAPHES 
        //passage de l'id du photographers que lequel on clique en url
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
            <p class="tagline">${tagline}</p>
            <p class="price">${price}/jour€</p>
            </div>
            ${tagsHTML}
            </section>
            `
    });
}).catch(err => {
    // Do something for an error here
    console.log(err);
});