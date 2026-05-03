import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");

const searchInput = document.querySelector(`input[name ="search-text"]`);
const loader = document.querySelector(".loader");



form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    showLoader();
    const serchText = searchInput.value.trim();
    event.target.reset();
    
    if (serchText.length > 0) {
        getImagesByQuery(serchText);
    }
    else {
        iziToast.show({
                message: 'The field is empty',
                color: 'red',
                position: 'topRight',
        });
        loader.classList.add("hidden");
    }
    
}

