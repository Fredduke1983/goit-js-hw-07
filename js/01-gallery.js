import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

galleryItems.map((a) => {
  const img = document.createElement("img");
  img.src = `${a.preview}`;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.display = "block";

  galleryRef.append(img);
});
