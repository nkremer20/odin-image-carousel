import './styles.css';

const imageContainer = document.querySelector('.images');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');

function nextImage() {
    const image = imageContainer.firstElementChild;
    imageContainer.appendChild(image);
    console.log('next image')
}

function previousImage() {
    const image = imageContainer.lastElementChild;
    imageContainer.insertBefore(image, imageContainer.firstElementChild);
    console.log('previous image')
}

// Initialize timer variable
let timer;

// Change image every 3 seconds
function setTimer() {
    clearInterval(timer);

    timer = setInterval(nextImage, 3000);
}

// Start image change timer when the page loads
setTimer();

nextBtn.addEventListener('click', () => {
    nextImage();
    setTimer();
})

previousBtn.addEventListener('click', () => {
    previousImage();
    setTimer();
})