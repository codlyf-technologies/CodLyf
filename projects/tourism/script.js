const slide = document.querySelector('.testimonial-slide');
const totalSlides = document.querySelectorAll('.testimonial-item').length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 5000);