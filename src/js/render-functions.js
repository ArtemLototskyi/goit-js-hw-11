const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

function createGallery(images) {
    return images.map(({ webformatURL, previewURL, tags, likes, views, comments, downloads }) =>
        `
    <li class="gallery-item">
       <a class="gallery-link" href=${webformatURL}><img class="gallery-img" src=${previewURL} alt=${tags}/></a>
       <ul class="gallery-list">
         <li><p>Likes ${likes}</p></li>
         <li><p>Views ${views}</p></li>
         <li><p>Comments ${comments}</p></li>
         <li><p>Downloads ${downloads}</p></li>
       </ul>
    </li>
    `
    ).join("");
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