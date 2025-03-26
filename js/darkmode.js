const root = document.documentElement
const input = document.querySelector('.darkmode__input')
const label = document.querySelector('.darkmode__label')

// --secondary: rgb(230, 230, 230);
// 	--back: rgb(190, 190, 190);
// 	--text-primary: white;
// --profile: rgba(100, 100, 100, 0.8);
// 	--text-secondary: rgb(200, 200, 200);

const toggle = () => {
	if (input.checked === false) {
		root.style.setProperty('--primary', 'rgb(80, 80, 80)')
		root.style.setProperty('--bg', 'rgba(0, 0, 0, 0.85)')
		root.style.setProperty('--secondary', 'rgb(120, 120, 120)')
		root.style.setProperty('--back', 'rgb(65, 65, 65)')
		root.style.setProperty('--profile', 'rgb(60, 60, 60)')
		root.style.setProperty('--text-primary', 'white')
		root.style.setProperty('--text-secondary', '#cccccc')
	} else {
		root.style.setProperty('--primary', 'rgb(173, 64, 64)')
		root.style.setProperty('--bg', 'grey')
		root.style.setProperty('--secondary', 'rgb(230, 230, 230)')
		root.style.setProperty('--back', 'rgb(150, 150, 150)')
		root.style.setProperty('--profile', 'rgba(100, 100, 100, 0.8)')
		root.style.setProperty('--text-primary', 'white')
		root.style.setProperty('--text-secondary', 'rgb(200, 200, 200)')
	}
}

label.addEventListener('click', toggle)
