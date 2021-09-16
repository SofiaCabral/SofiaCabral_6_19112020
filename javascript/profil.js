//Récupearation de l'id dans l'url
const idURL = window.location.search;
//enlever le ? et garder que l'id
const onlyId = idURL.slice(1);
console.log(onlyId);

// const photographerData = data.photographers.find((id) => id === onlyId);