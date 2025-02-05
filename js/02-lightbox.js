import { galleryItems } from './gallery-items.js';

const galleryDiv = document.querySelector(".gallery");

const galleryRow = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a>
    </li>`;
}).join("");

galleryDiv.innerHTML = galleryRow;

let lightbox = new SimpleLightbox('.gallery .gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
    close: true
});

console.log(galleryItems);
