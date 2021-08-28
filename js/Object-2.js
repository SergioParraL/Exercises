function pepita () {
	let fixedCost = 10 // take off and landing. 5 units each
	this.energy = 0
	this.eat = (e) =>{
		let energyIncrement = e * 4 // 4 = unit of energy for grams of food received
		this.energy = energyIncrement
	}
	this.fly = (e) => {
		let spending = (this.energy - e) - fixedCost
		this.energy = spending
	}
}
let $isnt
const golondrina = document.querySelector('#newPepita')
const eatButton = document.querySelector('#eat')
const flyButton = document.querySelector('#fly')
const energyButton = document.querySelector('#energy')
golondrina.addEventListener('click',showMessage)
energyButton.addEventListener('click',energy)
eatButton.addEventListener('click',eat)
flyButton.addEventListener('click',fly)

function eat () {
	let number = parseInt(prompt('ingrese numero'))
	$isnt.eat(number) 
}
function fly () {
	let number = parseInt(prompt('ingrese numero')) 
	$isnt.fly(number) 
}
function energy () {
	const p = document.querySelector('#showEnergy')
	p.innerHTML = $isnt.energy
}
function showMessage(){
	const message = document.querySelector('.messageDiv')
	$isnt = new pepita()
	message.style.display = 'flex' 
	setTimeout(function(){
		message.style.display = 'none' 
	}, 2000 )
	return $isnt
}