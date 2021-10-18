class LightBox {
    constructor(photographerData, photographerMedia, $imageLightBox, lightBox, lightBoxRightButton, lightBoxLeftButton) {
            this.photographerData = photographerData;
            //prendre les noms avant l'espace pour pouvoir trouver le dossier 
            this.folderPhotographerName = this.photographerData.name.split(" ")[0];
            this.lightBoxIndex = 0;
            this.photographerMedia = photographerMedia;
            this.$imageLightBox = $imageLightBox;
            this.lightBox = lightBox;
            this.lightBoxRightButton = lightBoxRightButton;
            this.lightBoxLeftButton = lightBoxLeftButton;


        }
        //ouvrir la lightbox
    display(i) {
            //index
            this.lightBoxIndex = i;
            //cherhcer l'image dans le folder 
            const imagePath = `images/${this.folderPhotographerName}/${this.photographerMedia[i].image}`; // image media du photograher
            //mettre la src de l'image
            this.$imageLightBox.src = imagePath;

            //afficher la lightbox
            this.lightBox.style.display = 'block';
            //aller dans l'image dans la droite
            this.goToTheRight();
            //aller dans l'image dans la gauche
            this.goToTheLeft();
            //naviguer avec les fleches 
            this.addKeyBoardListeners();
        }
        //fermer la lightbox
    close() {
            this.lightBox.style.display = 'none';
        }
        //ALLER DANS LES IMAGES SUIVANTES DE DROITE JUSQU A LA DERNIERE 
    switchRight() {
            //si l'index de la lightbox est inferier à la longueur 
            if (this.lightBoxIndex < this.photographerMedia.length - 1) {
                //variable qui contiendra le chemin des images
                let imagePath;
                //aller vers l'image suivante
                this.lightBoxIndex++;
                //s'il n'y a pas d'image on affiche le logo
                if (!this.photographerMedia[this.lightBoxIndex].image) {
                    imagePath = `images/logo/logo.png`;
                } else {
                    //s'il y en a on affiche l'image suivanye
                    imagePath = `images/${this.folderPhotographerName}/${this.photographerMedia[this.lightBoxIndex].image}`;
                }
                //mettre le lien de l'image
                this.$imageLightBox.src = imagePath;
            }
        }
        //QUAND ON CLIQUE ON VA VERS L IMAGE SUIVANTE JUSQU A LA DERNIERE 
    goToTheRight() {
            this.lightBoxRightButton.addEventListener('click', () => {
                this.switchRight();
            });
        }
        //ALLER DANS LES IMAGES PRECEDENTES  JUSQU A LA DERNIERE 
    switchLeft() {
            //si l'image est superier à 0
            if (this.lightBoxIndex > 0) {
                //variable qui contiendra le chemin des images
                let imagePath;
                //aller vers l'image precedente
                this.lightBoxIndex--;
                //s'il n'y a pas d'image on affiche le logo
                if (!this.photographerMedia[this.lightBoxIndex].image) {
                    imagePath = `images/logo/logo.png`;
                } else {
                    //s'il y en a on affiche l'image precedente
                    imagePath = `images/${this.folderPhotographerName}/${this.photographerMedia[this.lightBoxIndex].image}`;

                }
                //mettre le lien de l'image
                this.$imageLightBox.src = imagePath;
            }
        }
        //QUAND ON CLIQUE ON VA VERS L IMAGE PRECEDENTE  JUSQU A LA DERNIERE 
    goToTheLeft() {
            this.lightBoxLeftButton.addEventListener('click', () => {
                this.switchLeft();
            });
        }
        //ALLER DANS LES IMAGES SUIVANTES ET PRECEDENTES AVEC LES FLECHES    
    addKeyBoardListeners() {
        window.addEventListener("keydown", e => {
            //si on a clique dans la fleche de droite 
            if (e.code == "ArrowRight") {
                //nous allons dans l'image suivante
                this.switchRight();
                //si on a clique dans la fleche de gauche
            } else if (e.code == "ArrowLeft") {
                //nous allons dans l'image precedente
                this.switchLeft();
            }
        })
    }
}