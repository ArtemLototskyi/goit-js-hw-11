import axios from "axios";
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

import { hideLoader } from "./render-functions";
import { createGallery } from "./render-functions";

const gallery = document.querySelector(".gallery");
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


function getImagesByQuery(query) {
    axios("https://pixabay.com/api/", {
        params: {
            key: "55695379-7a0fca570ad88a67ebcd7aaee",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
        .then(({ data }) => {
            if (data.hits.length > 0) {
                gallery.innerHTML = createGallery(data.hits);
            }
            else {
                iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                color: 'red',
                position: 'topRight',
                });
                return;
            }
            lightbox.refresh();
        })
        .catch((error) => {
            console.log(error.message)
        })
        .finally(() => {
            hideLoader();
    })
}

export { getImagesByQuery };