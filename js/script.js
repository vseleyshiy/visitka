// Database
const projects = [
    {
        link: 'https://github.com/vseleyshiy/EasyLinks',
        github_link: 'https://github.com/vseleyshiy/EasyLinks',
        title: '&#9830; [CLICK] Web App on Python & eel | EasyLinks &#9830;',
        image: 'img/easylinks_img.jpg',
        text_title: 'Приложение, которое поможет вам удобно открывать большое кол-во ссылок в браузере',
        description: `
        <span>
            Подробная инструкция на английском есть на GitHub главной странице проекта в README файле.
        </span>
        <span>
            Ссылка на неё ниже.
        </span>
        `,
    },
    {
        link: 'https://github.com/vseleyshiy/ReactMakimaCoin',
        github_link: 'https://github.com/vseleyshiy/ReactMakimaCoin',
        title: '&#9824; [CLICK] Frontend Lending | ReactMakimaCoin &#9824;',
        image: 'img/reactmakimacoin_img.jpg',
        text_title: 'Фронтенд копия Hamster Kombat (старого) на React JS с Макимой <3',
        description: `
        <span>Сделана главная секция, секция с улучшениями, которая работает,
        но после перезагрузки страницы изменения пропадают.
        Так же сделана секция с ссылками, за подписку дается монета и тд)</span>
        <span>Работой доволен, при помощи нее изучил библиотеку React JS, в будущем сделаю Backend на PHP.</span>
        `,
    },
    {
        link: 'https://vseleyshiy.github.io/cheerful-gardener/',
        github_link: 'https://github.com/vseleyshiy/cheerful-gardener',
        title: '&#9827; [CLICK] Игра | cheerful gardener &#9827;',
        image: 'img/cheerfulgardener_img.jpg',
        text_title: 'Веселый фермер фармилка',
        description: `<span>Фармишь на грядки, покупаешь их, фармишь удобрения, удобряешь грядки.
        Пока не обновишь страницу, прогресс не пропадает.</span>`,
    },
]

// Code

const modal = document.querySelector('.modal');
const modal__close = document.getElementById('modal__close');

modal.addEventListener('close', () => {
    document.body.classList.remove('lock');
})

const list = document.querySelector('.hero__list');

function get_projects() {
    projects.forEach(el => {
        const item = `
        <div class="hero__item" style="background-image: url(${el.image})" target="_blank">
            <div class="hero__item-info">
                <a href="${el.link}" class="hero__item-title" target="_blank">
                    ${el.title}
                </a>
                <div class="hero__item-btn">
                    Подробнее
                </div>
            </div>
        </div>`;
        list.innerHTML += item;
    });
    const btns = document.querySelectorAll('.hero__item-btn');

    btns.forEach((el, index) => {
        el.addEventListener('click', () => {
            get_description(index);
            modal.showModal();
            document.body.classList.add('lock');
        });
    });
}

get_projects();

function get_description(index) {
    let title;
    if (projects[index].title.includes('[CLICK]')) {
        title = projects[index].title.replace('[CLICK]', '');
    } else {
        title = projects[index].title;
    }
    const item = `
    <div class="modal__img" style="background-image: url(${projects[index].image})">
        <div class="modal__title">
            ${title}
        </div>
    </div>
    <div class="modal__text">
        <div class="modal__text-title">
            ${projects[index].text_title}
        </div>
        <div class="modal__text-info">
            ${projects[index].description}
        </div>
        <a class="modal__link" href="${projects[index].github_link}" target="_blank">
            Главная страница проекта на GitHub
        </a>
    </div>
    `
    const modal__content = document.querySelector('.modal__content');
    modal__content.innerHTML = item;
}