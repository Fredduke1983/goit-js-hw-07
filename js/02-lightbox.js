import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", (e) => e.preventDefault());

function createHTMLMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) =>
      galleryRef.insertAdjacentHTML(
        "beforeend",
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
      )
    )
    .join("");
}

createHTMLMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  animationSpeed: 400, //*тренування з опціями модуля */
  fadeSpeed: 500, //*тренування з опціями модуля */
  swipeTolerance: 100, //*тренування з опціями модуля */
});

//*тренування з опціями модуля */
lightbox.on("close.simplelightbox", function (e) {
  console.log(e.target);
});

//!=============

/*  <a class="gallery__item" href="large-image.jpg">
        <img class="gallery__image" src="small-image.jpg" alt="Image description" />
    </a>; */

//!=============
