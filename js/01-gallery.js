import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryRef = document.querySelector(".gallery");

function createHTMLMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) =>
      galleryRef.insertAdjacentHTML(
        "beforeend",
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
      )
    )
    .join("");
}

function modalImgScrn(imgSrc) {
  basicLightbox
    .create(`<img width="100%" height="100%" src="${imgSrc}">`)
    .show();
}

function targetImg(e) {
  e.preventDefault();
  modalImgScrn(e.target.dataset.source);
}

createHTMLMarkup(galleryItems);
galleryRef.addEventListener("click", targetImg);

//!=============

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */

//!=============
