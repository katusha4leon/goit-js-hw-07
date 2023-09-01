import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

// Створення розмітки

function addMarkup(elements) {
    return elements
        .map(({ preview, original, description }) => `
        <li class="gallery__item">
	        <a class="gallery__link" href="${original}">
		        <img class = "gallery__image"
		            src="${preview}"
		            alt="${description}"
                    data-source = "${original}"
		            width="350">
	        </a>
        </li>`).join("");
}
container.insertAdjacentHTML("beforeend", addMarkup(galleryItems));

// Прослуховувач подій та функція обробки подій

container.addEventListener("click", onClick);

function onClick(event) {

    // Відкриття картинки в модальному вікні

    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    // console.log(event.target);
    const pict = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <div class = "modal">
    <img src = "${pict}"
    alt = "">
    </div>
`)
    instance.show();

    // Закриття модального вікна після натискання клавіші Esc

    container.addEventListener("keydown", event => {
        if (event.code === "Escape") {
            instance.close();
        }
});

}

console.log(galleryItems);
