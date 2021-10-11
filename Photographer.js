request.addEventListener("load", () => {
    data = JSON.parse(request.response); //transgormer json en js en stocker en data
    if (request.status == 200 || request.status == 201) { //si tout se passe bien

        class Photographer {
            constructor(name, id, city, country, tags, tagline, price, portrait) {
                this.name = name;
            }



            displayLightBox(i) {
                //prendre les noms avant l'espace pour pouvoir trouver le dossier 
                const folderPhotographerName = this.photographerData.name.split(" ")[0]
                lightBoxIndex = i;

                //cherhcer l'image dans le folder 
                imagePath = `images/${folderPhotographerName}/${photographerMedia[i].image}`; // image media du photograher
                $imageLightBox.src = imagePath;
                lightBox.style.display = 'block';
                goToTheRight();
                goToTheLeft();

            }

            closeLightBox() {
                lightBox.style.display = 'none';
            }
            goToTheRight() {
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

            goToTheLeft() {
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
        }



    } else { //si non, afficher le message d'erreur 
        console.log(request.status);
    }
})
request.addEventListener("error", (e) => { //afficher l'erreur
    console.log(e);
})