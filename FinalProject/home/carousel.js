// Initialize the current index to 0
let currentIndex = 0;

// Get the carousel and buttons from the DOM
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Get the images within the carousel
const images = document.querySelectorAll('.carousel-inner img');
const imageCount = images.length;

// Calculate the width of the images and container
const imageWidth = images[0].clientWidth;

// Function to update the carousel position based on the current index
function updateCarousel() {
    for (let i = 0; i < imageCount; i++) {
        images[i].style.display = i === currentIndex ? 'block' : 'none';
    }
}

// Function to move to the next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= imageCount) {
        currentIndex = 0; // Wrap around to the first slide
    }
    updateCarousel();
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imageCount - 1; // Wrap around to the last slide
    }
    updateCarousel();
}

// Attach event listeners to the navigation buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);
