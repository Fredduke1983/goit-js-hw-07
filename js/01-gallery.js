import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

galleryItems.map((a) => {
  const img = document.createElement("img");
  img.src = `${a.preview}`;
  img.classList.add("gallery__image");
  img.style.cursor = "pointer";

  galleryRef.append(img);
});
