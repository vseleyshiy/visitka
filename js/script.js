let offset = 0;
const slider = document.querySelector('.slider__list');
btnNext = document.querySelector('.slider__button-next');
btnPrev = document.querySelector('.slider__button-prev');
let dots = document.getElementById('dots');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');

btnNext.addEventListener('click', function () {
    offset = offset + 265;
    slider.style.transform = 'translateX(' + -offset + 'px)';
    if (offset > 0) {
        offset = -265;
    };
    if (dot2.classList.contains('slider__dot-active')) {
        dot2.classList.remove('slider__dot-active');
        dot1.classList.add('slider__dot-active');
    } else {
        dot1.classList.remove('slider__dot-active');
        dot2.classList.add('slider__dot-active');
    };
});

function time() {
    offset = offset + 265;
    slider.style.transform = 'translateX(' + -offset + 'px)';
    if (offset > 0) {
        offset = -265;
    };
    if (dot2.classList.contains('slider__dot-active')) {
        dot2.classList.remove('slider__dot-active');
        dot1.classList.add('slider__dot-active');
    } else {
        dot1.classList.remove('slider__dot-active');
        dot2.classList.add('slider__dot-active');
    };
};

setInterval(time, 11000);



let info1 = document.getElementById('info1');
let info2 = document.getElementById('info2');
let info3 = document.getElementById('info3');
let infoButton1 = document.getElementById('infoButton1');
let infoButton2 = document.getElementById('infoButton2');
let infoButton3 = document.getElementById('infoButton3');
let infoButtonHide1 = document.getElementById('infoButtonHide1');
let infoButtonHide2 = document.getElementById('infoButtonHide2');
let infoButtonHide3 = document.getElementById('infoButtonHide3');


infoButton1.addEventListener('click', function () {
    info1.style.display = 'block';
    infoButtonHide1.style.display = 'block';
    infoButton1.style.display = 'none';
});
infoButtonHide1.addEventListener('click', function () {
    info1.style.display = 'none';
    infoButtonHide1.style.display = 'none';
    infoButton1.style.display = 'block';
});

infoButton2.addEventListener('click', function () {
    info2.style.display = 'block';
    infoButtonHide2.style.display = 'block';
    infoButton2.style.display = 'none';
});
infoButtonHide2.addEventListener('click', function () {
    info2.style.display = 'none';
    infoButtonHide2.style.display = 'none';
    infoButton2.style.display = 'block';
});

infoButton3.addEventListener('click', function () {
    info3.style.display = 'block';
    infoButtonHide3.style.display = 'block';
    infoButton3.style.display = 'none';
});
infoButtonHide3.addEventListener('click', function () {
    info3.style.display = 'none';
    infoButtonHide3.style.display = 'none';
    infoButton3.style.display = 'block';
});
// const images = document.querySelectorAll('.slider__item');
// const controlls = document.querySelectorAll('.slider__button');
// let ImageIndex = 1;

// function show(index) {
//     images[ImageIndex].classList.remove('active');
//     images[index].classList.add('active');
//     ImageIndex = index;
// };

// // controlls.forEach((e) => {
// //     e.addEventListener('click', () => {
// //         if (Event.target.contains('.left')) {
// //             let index = ImageIndex - 1;

// //             if (index < 0) {
// //                 index = images.length - 1;
// //             };

// //             show(index);
// //         } else if (Event.target.contains('.right')) {
// //             let index = ImageIndex + 1;
// //             if (index >= images.length) {
// //                 index = 0;
// //             };
// //             show(index);
// //         };
// //     });
// // });
//      controlls.forEach((e) => {
//     e.addEventListener('click', () => {
//         if (controlls.classList.('left')) {
//             let index = ImageIndex - 1;

//             if (index < 0) {
//                 index = images.length - 1;
//             };

//             show(index);
//         } else if (controlls.classList.contains('right')) {
//             let index = ImageIndex + 1;
//             if(index >= images.length) {
//                 index = 0;
//             }
//             show(index);
//         }
//     })
// })
// show(ImageIndex);
// controlls.forEach( (e) => {
//     addEventListener('click', () => {
//         if (controlls.className = 'left') {
//             let index = ImageIndex - 1;
//             if (index < 0) {
//                 index = images.length - 1;
//             };

//             show(index);
//         } else if (controlls.className = 'right') {
//             let index = ImageIndex + 1;
//             if (index >= images.length) {
//                 index = 0;
//             };
//             show(index);
//         };
//     })
// });


// show(ImageIndex)