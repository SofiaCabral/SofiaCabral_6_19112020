// Replace ./data.json with your JSON feed
fetch('data.json').then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
    console.log(data);
}).catch(err => {
    // Do something for an error here
});


//ajouter le titre dans la light box
//demander comment enlever l'espace sur flex wrap
//comment mettre du site sur select
//comment ajouter l'alt de l'image