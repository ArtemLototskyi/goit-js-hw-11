import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
  const markup = images.map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
        </a>
        <ul class="gallery-list">
          <li><p>Likes ${likes}</p></li>
          <li><p>Views ${views}</p></li>
          <li><p>Comments ${comments}</p></li>
          <li><p>Downloads ${downloads}</p></li>
        </ul>
      </li>
    `
  ).join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    
    lightbox.refresh();
}

function clearGallery() {
    gallery.innerHTML = ``;
}

function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}

export { createGallery, clearGallery, showLoader, hideLoader };