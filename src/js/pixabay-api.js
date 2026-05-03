import axios from "axios";


import { hideLoader } from "./render-functions";
import { createGallery } from "./render-functions";



function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/", {
        params: {
            key: "55695379-7a0fca570ad88a67ebcd7aaee",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
}

export { getImagesByQuery };