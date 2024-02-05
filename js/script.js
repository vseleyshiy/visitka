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


const heroItem = document.querySelectorAll('li.hero__item');
const info = document.querySelectorAll('div.hero__item-info');
const infoButton = document.querySelectorAll('a.hero__item-btn');

function infoShow(el, hide, main) {
    info[el].style.display = 'inline-block';
    infoButton[hide].style.display = 'inline-block';
    infoButton[main].style.display = 'none';
    heroItem[el].style.color = 'white';
    heroItem[el].style.border = '1px solid rgb(90, 90, 90)';
    heroItem[el].style.backgroundColor = 'rgb(90, 90, 90)';
    heroItem[el].style.transform = 'scale(1.005)';
    infoButton[hide].style.color = 'rgb(255, 87, 87)';
    infoButton[main].style.color = 'skyblue';
}
function infoHide(el, hide, main) {
    info[el].style.display = 'none';
    infoButton[hide].style.display = 'none';
    infoButton[main].style.display = 'inline-block';
    heroItem[el].style.color = '';
    heroItem[el].style.border = '';
    heroItem[el].style.backgroundColor = '';
    heroItem[el].style.transform = '';
    infoButton[hide].style.color = '';
    infoButton[main].style.color = '';
}


infoButton[0].addEventListener('click', function () {
    infoShow(0, 1, 0);
});
infoButton[1].addEventListener('click', function () {
    infoHide(0, 1, 0);
});

infoButton[2].addEventListener('click', function () {
    infoShow(1, 3, 2);
});
infoButton[3].addEventListener('click', function () {
    infoHide(1, 3, 2);
});

infoButton[4].addEventListener('click', function () {
    infoShow(2, 5, 4);
});
infoButton[5].addEventListener('click', function () {
    infoHide(2, 5, 4);
});

infoButton[6].addEventListener('click', function () {
    infoShow(3, 7, 6);
});
infoButton[7].addEventListener('click', function () {
    infoHide(3, 7, 6);
});

infoButton[8].addEventListener('click', function () {
    infoShow(4, 9, 8);
});
infoButton[9].addEventListener('click', function () {
    infoHide(4, 9, 8);
});

infoButton[10].addEventListener('click', function () {
    infoShow(5, 11, 10);
});
infoButton[11].addEventListener('click', function () {
    infoHide(5, 11, 10);
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

