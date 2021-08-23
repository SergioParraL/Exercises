function pepita () {
	let fixedCost = 10 // take off and landing. 5 units each
	this.energy = 0
	this.comer = (e) =>{
		let energyIncrement = e * 4 // 4 = unit of energy for grams of food received
		this.energy = energyIncrement
	}
	this.volar = (e) => {
		let spending = (this.energy - e) - fixedCost
		this.energy = spending
	}
}