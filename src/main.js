import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

const searchInput = document.querySelector(`input[name="search-text"]`);
const loader = document.querySelector(".loader");
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    showLoader();
    const searchText = searchInput.value.trim();
    event.target.reset();

    getImagesByQuery(searchText)
        .then(({ data }) => {
            if (data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    color: 'red',
                    position: 'topRight',
                });
                return;
            }

            createGallery(data.hits);
            lightbox.refresh();
        })
        .catch(error => {
            iziToast.show({
                message: 'Something went wrong!',
                color: 'red',
            });
            console.log(error);
        })
        .finally(() => {
            hideLoader();
        });
}


