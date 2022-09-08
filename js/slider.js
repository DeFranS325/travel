let slideIndex = 2;
let stick = ['left', 'active', 'right'];
const SLIDESHOW = document.querySelector('.slider-box');
let dots = document.querySelectorAll(".selector-pagination");
let copyLeftSlide, copyActiveSlide, copyRightSlide;
let slides;
const BTN_LEFT = document.querySelector('.left-arrow');
const BTN_RIGHT = document.querySelector('.right-arrow');
const BTN_LEFT_SLIDE = document.querySelector('#left-slide');
const BTN_RIGHT_SLIDE = document.querySelector('#right-slide');

dots[slideIndex - 1].classList.add('active');
sticToSlide(document.querySelectorAll(".slider-cell"));

function sticToSlide(slides) {
    for (i = 1; i < slides.length - 1; i++) {
        slides[i].classList.remove('left', 'active', 'right');
        slides[i].classList.add(stick[i - 1]);
    }
}
//active -> active
function shiftLeftStick() {  //0  ->  1    ->   2   -> 0
    let n = stick[stick.length - 1];
    for (let i = stick.length - 1; i > 0; i--)
        stick[i] = stick[i - 1];
    stick[0] = n;
}

//active <- active
function shiftRightStick() { //0  <-  1    <-   2   <-  0
    let n = stick[0];
    for (let i = 0; i < stick.length - 1; i++)
        stick[i] = stick[i + 1];
    stick[stick.length - 1] = n;
}

function createCopySlide(slides, position) {
    let template;
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].id == position) {
            template = slides[i].innerHTML;
            break;
        }
    }
    return template;
}

function createNewSlide() {
    slides = document.querySelectorAll('.slider-cell');
    copyLeftSlide = createCopySlide(slides, 'left-slide');
    copyActiveSlide = createCopySlide(slides, 'active-slide');
    copyRightSlide = createCopySlide(slides, 'right-slide');
} 

const moveRight = () => {
    createNewSlide();

    document.querySelector('.tempRight').innerHTML = copyLeftSlide;

    SLIDESHOW.classList.add('translate-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
}

const moveLeft = () => {
    createNewSlide();

    document.querySelector('.tempLeft').innerHTML = copyRightSlide;

    SLIDESHOW.classList.add('translate-right');

    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
}

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);
BTN_LEFT_SLIDE.addEventListener('click', moveLeft);
BTN_RIGHT_SLIDE.addEventListener('click', moveRight);

SLIDESHOW.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left') {
        SLIDESHOW.classList.remove('translate-left');
        shiftLeftStick();
        showSlides(slideIndex -= 1);

        document.querySelector('#right-slide').innerHTML = copyLeftSlide;
        document.querySelector('#active-slide').innerHTML = copyRightSlide;
        document.querySelector('#left-slide').innerHTML = copyActiveSlide;
    }
    else {
        SLIDESHOW.classList.remove('translate-right');
        shiftRightStick();
        showSlides(slideIndex += 1);

        document.querySelector('#right-slide').innerHTML = copyActiveSlide;
        document.querySelector('#active-slide').innerHTML = copyLeftSlide;
        document.querySelector('#left-slide').innerHTML = copyRightSlide;
    }

    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
});


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    slides = document.querySelectorAll(".slider-cell");
    if (n > 3) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = 3;
    }
    sticToSlide(slides);

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    dots[3 - slideIndex].classList.add('active');
}