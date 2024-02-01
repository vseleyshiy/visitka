let offset = 0;
const slider = document.querySelector('.slider__list');
let dots = document.getElementById('dots');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');

function time() {
    offset = offset + 265;
    slider.style.transform = 'translateX(' + -offset + 'px)';
    if (offset > 265) {
        offset = -265;
    }
    if (dot1.classList.contains('slider__dot-active')) {
        dot1.classList.remove('slider__dot-active');
        dot2.classList.add('slider__dot-active');
    } else if (dot2.classList.contains('slider__dot-active')) {
        dot2.classList.remove('slider__dot-active');
        dot3.classList.add('slider__dot-active');
    } else {
        dot3.classList.remove('slider__dot-active');
        dot1.classList.add('slider__dot-active');
    };
};

setInterval(time, 11000);


let info = document.querySelectorAll('div.hero__item-info');
let infoButton = document.querySelectorAll('a.hero__item-btn');


infoButton[0].addEventListener('click', function () {
    info[0].style.display = 'block';
    infoButton[1].style.display = 'block';
    infoButton[0].style.display = 'none';
});
infoButton[1].addEventListener('click', function () {
    info[0].style.display = 'none';
    infoButton[1].style.display = 'none';
    infoButton[0].style.display = 'block';
});

infoButton[2].addEventListener('click', function () {
    info[1].style.display = 'block';
    infoButton[3].style.display = 'block';
    infoButton[2].style.display = 'none';
});
infoButton[3].addEventListener('click', function () {
    info[1].style.display = 'none';
    infoButton[3].style.display = 'none';
    infoButton[2].style.display = 'block';
});

infoButton[4].addEventListener('click', function () {
    info[2].style.display = 'block';
    infoButton[5].style.display = 'block';
    infoButton[4].style.display = 'none';
});
infoButton[5].addEventListener('click', function () {
    info[2].style.display = 'none';
    infoButton[5].style.display = 'none';
    infoButton[4].style.display = 'block';
});
infoButton[6].addEventListener('click', function () {
    info[3].style.display = 'block';
    infoButton[6].style.display = 'none';
    infoButton[7].style.display = 'block';
});
infoButton[7].addEventListener('click', function () {
    info[3].style.display = 'none';
    infoButton[6].style.display = 'block';
    infoButton[7].style.display = 'none';
});
infoButton[8].addEventListener('click', function () {
    info[4].style.display = 'block';
    infoButton[8].style.display = 'none';
    infoButton[9].style.display = 'block';
});
infoButton[9].addEventListener('click', function () {
    info[4].style.display = 'none';
    infoButton[8].style.display = 'block';
    infoButton[9].style.display = 'none';
});
infoButton[10].addEventListener('click', function () {
    info[5].style.display = 'block';
    infoButton[10].style.display = 'none';
    infoButton[11].style.display = 'block';
});
infoButton[11].addEventListener('click', function () {
    info[5].style.display = 'none';
    infoButton[10].style.display = 'block';
    infoButton[11].style.display = 'none';
});


let heroButtonPrev = document.getElementById('heroButtonPrev');
let heroButtonNext = document.getElementById('heroButtonNext');
let heroFirstList = document.getElementById('heroFirstList');
let heroSecondList = document.getElementById('heroSecondList');
let secondCol = document.getElementById('secondCol');

function showSecondList() {
    heroSecondList.style.display = 'flex';
    heroFirstList.style.display = 'none';
}

function showFirstList() {
    heroSecondList.style.display = 'none';
    heroFirstList.style.display = 'flex';
}

const headerLinks = document.querySelectorAll('li.header__item');
let burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    if (burger.classList.contains('open')) {
        // burger.style.display = 'flex';
        burger.classList.remove('open');
        burger.classList.add('exit');
        setTimeout(() => {
            burger.classList.remove('exit');
        }, 350);
        headerLinks[2].classList.add('close');
        headerLinks[3].classList.add('close');
        headerLinks[1].classList.remove('close');
        headerLinks[4].classList.remove('close');
    } else {
        burger.classList.add('open');
        burger.classList.remove('exit');
        // burger.classList.remove('burger');
        headerLinks[1].classList.add('close');
        headerLinks[4].classList.add('close');
        headerLinks[2].classList.remove('close');
        headerLinks[3].classList.remove('close');
    }
});

