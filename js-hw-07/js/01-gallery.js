import { galleryItems } from './gallery-items.js';

const galleryDiv = document.querySelector(".gallery");

const galleryRow = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
}).join("");

galleryDiv.innerHTML = galleryRow;

galleryDiv.addEventListener("click", onOpenModal);

let instance = null;  

function onOpenModal(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") return;
  
    const orgImg = event.target.dataset.source;

    instance = basicLightbox.create(`
      <img src="${orgImg}">
    `);
  
    instance.show();
    
    document.addEventListener('keydown', onEscPress);
}

function onEscPress(event) {
    if (event.key === 'Escape' && instance && instance.visible()) {
        instance.close();
        document.removeEventListener('keydown', onEscPress);
    }
}

console.log(galleryItems);
