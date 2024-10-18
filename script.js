let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".indicator");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => {
        slide.style.opacity = "0";
    });

    indicators.forEach(indicator => {
        indicator.classList.remove("active");
    });

    slides[slideIndex - 1].style.opacity = "1";
    indicators[slideIndex - 1].classList.add("active");
}

// Cambiar automáticamente cada 5 segundos
setInterval(() => {
    moveSlide(1);
}, 5000);
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
