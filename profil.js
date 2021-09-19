let requestURL = "/data.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.send();


request.addEventListener("load", () => {

    if (request.status == 200 || request.status == 201) { //si tout se passe bien
        data = JSON.parse(request.response); //transgormer json en js en stocker en data

        //boucle qui prends les valeurs qui sont sur le json
        data.photographers.forEach((id
        }) => {


        });


} else { //si non, afficher le message d'erreur 
    console.log(request.status);
}
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})