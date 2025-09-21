import './styles.css';

let imageContainer = document.querySelector('.images');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');

nextBtn.addEventListener('click', () => {
    const image = imageContainer.firstElementChild;

    imageContainer.appendChild(image);
})

previousBtn.addEventListener('click', () => {
    const image = imageContainer.lastElementChild;

    imageContainer.insertBefore(image, imageContainer.firstElementChild);
})