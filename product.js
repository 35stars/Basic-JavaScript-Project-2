

const increaseBtn = document.getElementById('inc-btn')
const decreaseBtn = document.getElementById('dec-btn')
const quantityEl = document.getElementById('quantity')

const resetBtn = document.getElementById('res-btn')


const nameEl = document.getElementById('name')
const enterBtn = document.getElementById('enter-btn')


const submitBtn = document.getElementById('sub-btn')
const nameSection = document.getElementById('name-section')

nameSection.style.display = 'none'


let quantity = 0
let index = 0
let points = 0


const images = ['images/Air Zoom Alphafly.webp','images/Vomero Premium.webp','images/Shox R4 - Metallic.png','images/Zoom Fly 6.webp','images/Quest 7.png','images/Vomero 18.png','images/Flyknit Trainer.png',
'images/Revolution 8.png','images/Zoom Fly.webp','images/Pegasus Turbo Air.webp','images/Winflo 11.avif','images/Pegasus Premium.png'
]

const prices = [26074.53,12295,9095,6876,9395,4495,8395,3549.39,3295,2739.88,2739.88,5495,13699.40]


const imgTag = document.getElementById('img')

imgTag.src = images[index]

document.getElementById('product-name')
	.innerText = 'Air Zoom Alphafly'

document.getElementById('price')
	.innerText = prices[index].toLocaleString('en-PH',{
		style: "currency",
		currency: 'php'
})



images.forEach((img,i,) => {

	let radioBtn = document.createElement('input')
	radioBtn.type = 'radio'
	radioBtn.name = 'nike'
	radioBtn.id = i

	document.getElementById('radio-buttons')
	.appendChild(radioBtn)
})

let radioBtns = document.getElementById('radio-buttons')

radioBtns.addEventListener('click',(e)=>{

	if(e.target.tagName !== 'INPUT') return;

	let name = images[e.target.id].split('/')
	name =  name.pop().split('.').shift()

	document.getElementById('product-name')
	.innerText = name

	document.getElementById('price')
	.innerText = prices[e.target.id].toLocaleString('en-PH',{
		style: "currency",
		currency: 'php'
	})

	imgTag.src = images[e.target.id]
})

increaseBtn.addEventListener('click',()=> {
	increaseQty()
})

decreaseBtn.addEventListener('click',()=> 
	decreaseQty()
)

submitBtn.addEventListener('click',(e)=>{

	if(quantity == 0){
		alert('Quantity must be greater than 1')
		return
	}

	document.getElementById('message').innerText = 'Please enter your name for checkout'
	nameSection.style.display = 'block'
})

resetBtn.addEventListener('click',()=>{

	index = 0
	points = 0
	quantity = 0

	quantityEl.innerText = quantity

	product.src = images[index]

	nameSection.style.display = 'none'
	document.getElementById('message').innerText = ''
	
})

enterBtn.addEventListener('click',()=>{

	if(isValidName()){
		alert(`Proceeding to checkout...`)
		return
	}

	alert('Invalid input. Please use letters only.')
})

function isValidName(){
	return /^[a-zA-Z\s]+$/.test(nameEl.value)
}


function increaseQty(){
	quantity++
	quantityEl.innerText = quantity
	
}

function decreaseQty(){
	quantity--

	if(quantity < 1){
		quantity = 1
	}

	quantityEl.innerText = quantity
}
