let currentIndex = 0;
const intervalTime = 5000;

function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carrosel-inner');
    const items = document.querySelectorAll('.carrosel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveCarousel(1);
}, intervalTime);