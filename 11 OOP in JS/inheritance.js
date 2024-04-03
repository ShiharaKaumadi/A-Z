class Vehicle {
    constructor(brand, price, number_of_wheels) {
        this._brand = brand;
        this._price = price;
        this._number_of_wheels = number_of_wheels;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        this._brand = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get number_of_wheels() {
        return this._number_of_wheels;
    }

    set number_of_wheels(value) {
        this._number_of_wheels = value;
    }
    countOfWheels(){
        console.log(this.number_of_wheels)
    }
    getVehicleDetails(){
        return `Brand : ${this.brand}, price: ${this.price}, Number of Wheels : ${this.number_of_wheels}`
    }
}

class Car extends Vehicle{
    constructor(brand, price, number_of_wheels) {
        super();
        this._brand = brand;
        this._price = price;
        this._number_of_wheels = number_of_wheels;
    }
    readyForTour(){
        console.log(`Boom Boom`)
    }
}

let car = new Car('Hybrid Car',1250000000, 4);
car.readyForTour();
console.log(car.brand);
console.log(car.price);
console.log(car.number_of_wheels);
let vehicle = new Vehicle('Motor Bike',58000, 2);
console.log(vehicle.brand);
console.log(vehicle.getVehicleDetails());



//==============output=====================
/*
Boom Boom
Hybrid Car
1250000000
4
Motor Bike
Brand : Motor Bike, price: 58000, Number of Wheels : 2
*/
