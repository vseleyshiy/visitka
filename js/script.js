let offset = 0; //смещение от левого края
const slider = document.querySelector('.slider__list');
btnNext = document.querySelector('.slider__button-next');
btnPrev = document.querySelector('.slider__button-prev');

btnNext.addEventListener('click', function() {
    offset = offset + 300;
    slider.style.left = -offset + 'px';
    if (offset > 0) {
        offset = -300;
    };
});

function time() {
    offset = offset + 300;
    slider.style.left = -offset + 'px';
    if (offset > 0) {
        offset = -300;
    };
};

setInterval(time, 11000)
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