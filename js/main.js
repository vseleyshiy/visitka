import { projects, stacks } from './database.js'

const modal = document.querySelector('.modal')
const modal__close = document.getElementById('modal__close')

modal.addEventListener('close', () => {
	document.body.classList.remove('lock')
})

const list = document.querySelector('.hero__list')

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
        </div>`
		list.innerHTML += item
	})
	const btns = document.querySelectorAll('.hero__item-btn')

	btns.forEach((el, index) => {
		el.addEventListener('click', () => {
			get_description(index)
			modal.showModal()
			document.body.classList.add('lock')
		})
	})
}

get_projects()

function get_description(index) {
	let title
	if (projects[index].title.includes('[CLICK]')) {
		title = projects[index].title.replace('[CLICK]', '')
	} else {
		title = projects[index].title
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
	const modal__content = document.querySelector('.modal__content')
	modal__content.innerHTML = item
}

const stacksList = document.querySelector('.stacks')

stacks.forEach((el, index) => {
	const item = `
        <div class="stack__item">
                <div class="stack__img-wrap">
                    <img
                        src="${el.img}"
                        alt="${el.title}"
                        class="stack__img"
                    />
                </div>
            <div class="stack__title">${el.title}</div>
        </div>`
	stacksList.innerHTML += item
	if (index == stacks.length - 1) {
		stacksList.innerHTML +=
			'<span style="color: #8c8c8c;font-size: 12px;">и прочие...</span>'
	}
})
