// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const li = document.createElement("li");
  li.classList.add(".gallery__item");
  li.innerHTML = ` <a class="gallery__link" href="${image.original}">
    <img class ="gallery__image" src="${image.preview}" alt"=${image.description}" title="${image.description}"/>
    </a>`;
  galleryEl.append(li);
});

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});
