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
    display(i) {


        this.lightBoxIndex = i;

        //cherhcer l'image dans le folder 
        const imagePath = `images/${this.folderPhotographerName}/${this.photographerMedia[i].image}`; // image media du photograher
        this.$imageLightBox.src = imagePath;
        this.lightBox.style.display = 'block';
        this.goToTheRight();
        this.goToTheLeft();
        this.addKeyBoardListeners();
        console.log(imagePath);

    }

    close() {
        this.lightBox.style.display = 'none';
    }

    switchRight() {
        if (this.lightBoxIndex < this.photographerMedia.length - 1) {

            // photographerMedia.forEach((m, i, a) => {
            console.log(this.lightBoxIndex);
            let imagePath;

            this.lightBoxIndex++;
            if (!this.photographerMedia[this.lightBoxIndex].image) {
                imagePath = `images/logo/logo.png`;
            } else {
                imagePath = `images/${this.folderPhotographerName}/${this.photographerMedia[this.lightBoxIndex].image}`;

            }


            this.$imageLightBox.src = imagePath;
            // }
        };
    }
    switchLeft() {

        if (this.lightBoxIndex > 0) {
            let imagePath;
            this.lightBoxIndex--;
            if (!this.photographerMedia[this.lightBoxIndex].image) {
                imagePath = `images/logo/logo.png`;
            } else {
                imagePath = `images/${this.folderPhotographerName}/${this.photographerMedia[this.lightBoxIndex].image}`;

            }

            this.$imageLightBox.src = imagePath;
            console.log(this.photographerMedia[this.lightBoxIndex]);

        }
    }
    goToTheRight() {
        this.lightBoxRightButton.addEventListener('click', () => {

            this.switchRight();


            console.log(this.$imageLightBox.src);

            // }
        });
    }

    goToTheLeft() {
        this.lightBoxLeftButton.addEventListener('click', () => {
            this.switchLeft();
        });
    }

    addKeyBoardListeners() {
        window.addEventListener("keydown", e => {
            if (e.code == "ArrowRight") {
                this.switchRight();
            } else if (e.code == "ArrowLeft") {

                this.switchLeft();


            }
        })
    }
}