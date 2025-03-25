import { projects, stacks } from './database.js'

const wrapper = document.querySelector('.wrapper')
const loader = document.querySelector('.loader')

window.onload = () => {
	wrapper.style.display = 'block'
	loader.style.display = 'none'
}

const modal = document.getElementById('modal')

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
        </div>
        <a class="hero__item-app" style="background-image: url(${el.image})">
            ${el.icon}
        </a>
        `
		list.innerHTML += item
	})

	add_listeners('.hero__item-btn')
	add_listeners('.hero__item-app')
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
	const modal__content = document.getElementById('modal__content')
	modal__content.innerHTML = item
}

const stacksList = document.getElementById('stacks')

const modalStacks = document.getElementById('modal-stacks')
const modalStacksList = document.getElementById('modal-stacks-list')

modalStacks.addEventListener('close', () => {
	document.body.classList.remove('lock')
})

for (let i = 0; i < stacks.length; i++) {
	const el = stacks[i]
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
	if (i <= 4) {
		stacksList.innerHTML += item
	} else {
		modalStacksList.innerHTML += item
	}

	if (i == 4) {
		stacksList.innerHTML +=
			'<span id="stacks-open" style="color: white;border-bottom: 2px solid white;cursor: pointer">и прочие...</span>'
	}
}

const stacksOpen = document.getElementById('stacks-open')

stacksOpen.addEventListener('click', openStacksModal)

function openStacksModal() {
	modalStacks.showModal()
	document.body.classList.add('lock')
}

function add_listeners(items) {
	const items_arr = document.querySelectorAll(items)

	items_arr.forEach((el, index) => {
		el.addEventListener('click', () => {
			get_description(index)
			modal.showModal()
			document.body.classList.add('lock')
		})
	})
}
