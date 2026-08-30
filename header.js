const menuEl = document.getElementById('menu')

menuEl.addEventListener('click',()=>{

	document.querySelector('ul')
	.classList.toggle('show')

	if(menuEl.querySelector('span')
	.style.display == 'none') {

		menuEl.querySelector('span')
		.style.display = 'block'

		menuEl.querySelector('img')
		.style.display = 'none'
		return
	}

	menuEl.querySelector('img')
		.style.display = 'block'

	menuEl.querySelector('span')
	.style.display = 'none'
})


document.querySelector('ul')
.addEventListener('click',(e)=>{

	if(e.target.tagName !== 'A')return;

	menuEl.querySelector('img')
		.style.display = 'block'

	menuEl.querySelector('span')
	.style.display = 'none'

	document.querySelector('ul').classList.remove('show')
})