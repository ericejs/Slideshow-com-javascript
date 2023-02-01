// VARIAVEIS

let totalSlides = document.querySelectorAll('.slider').length;
let currentSlide = 0;

document.querySelector('.slide-width').style.width = 
    `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-buttons').style.height = 
    `${document.querySelector('.slideshow').clientHeight}px`;


// FUNÇÕES
function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slide-width').style.marginLeft = 
    `-${newMargin}px`;
}

setInterval(goNext, 3000);