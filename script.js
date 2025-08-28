// Complete the js code
function Car(make, model) {
	if(typeof make !== "string" || typeof model !=="string"){
		throw new error("make and model should be string")
	}
	this.make=make;
	this.model=model;
}

Car.prototype.getMakeModel=function(){
	return `${this.make} ${this.model}`
}

function SportsCar(make, model, topSpeed) {
	this.make=make;
	this.model=model;
	this.topSpeed=topSpeed;
}

SportsCar.prototype=Object.create(Car.prototype)
SportsCar.prototype.constructor=SportsCar
SportsCar.prototype.getTopSpeed=function(){
    return this.topSpeed;
}

const car=new SportsCar("ferrai","0239",200)
console.log(car.getMakeModel())
console.log(car.getTopSpeed())
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
