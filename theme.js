

const switchIcon = document.getElementById('light-dark')

const img = document.querySelector('#light-dark img')

switchIcon.addEventListener('click',()=>{

	document.querySelectorAll('section').forEach(section =>{

		section.classList.toggle('on')

		if(!section.classList.contains('on')){

			img.src = 'icons/night.png'

			document.querySelector('.contact-form')
			.style.color = ''
			document.querySelector('.contact-form h2')
			.style.color = ''

			document.body.style.background = 'white'
			return;
		}

		img.src = 'icons/day.png'

		document.querySelector('.contact-form')
		.style.color = 'white'
		document.querySelector('.contact-form h2')
		.style.color = 'white'
		document.body.style.background = 'rgba(0, 0, 0, 1)'
	})
	
})
