// GET THE DATA FISH (PHOTOGRAPHERS & MEDIAS)
export default class Api {

    getData() {
        let requestURL = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";
        let request = new XMLHttpRequest();
        request.open("GET", requestURL);
        request.send();

    }


    async getDataFishEye() {
        let url = 'Api/FishEye/photographers.json';
        let response = await fetch(url);
        let data = await response.json();

        const dataPhotographers = [...data.photographers];
        const dataMedias = [...data.media];

        return {
            'photographers': dataPhotographers,
            'media': dataMedias
        };
    }
}