const date = new Date()
const year = date.getFullYear()
const copyright = document.querySelector('.footer__copyright')

copyright.textContent = `© 2023-${year} vseleyshiy`
