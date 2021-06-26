//object in j$
let car = {
    name: "Carola",
    topSpeed: 120,
    run: function () {
        console.log(`car is running well!`);
    }
}
console.log(car);
//Constructor in j$
function generalCar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running.`);
    }
    this.analyze = function () {
        console.log(`${this.name} is ${400 - this.speed} km/h slower than Mercades:`);
    }
}
car1 = new generalCar('Toyota', 220);
car2 = new generalCar('Lambergani', 320);
car3 = new generalCar('Mercades', 400);
car1.analyze();
console.log(car1);
console.log(car2);
console.log(car3);