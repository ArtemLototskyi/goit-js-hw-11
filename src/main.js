import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

const searchInput = document.querySelector(`input[name="search-text"]`);
const loader = document.querySelector(".loader");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    showLoader();
    const searchText = searchInput.value.trim();
    event.target.reset();
 
    if (searchText.length === 0) {
        iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    color: 'red',
                    position: 'topRight',
        });
        hideLoader();
        return;
    }

    getImagesByQuery(searchText)
        .then((data) => {
            console.log(data)
            if (data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    color: 'red',
                    position: 'topRight',
                });
                return;
            }

            createGallery(data.hits);
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


