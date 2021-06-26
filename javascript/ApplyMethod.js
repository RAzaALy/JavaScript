//Apply method() takes argumenst as an array

function sum(a, b, c) {
    console.log(a + b + c);
}
let arr = [2, 3, 4];
sum.apply(null, arr);

var person = {
    fullName: function (city, country) {
        console.log(`My name is ${this.firstName} ${this.lastName} and leave in ${city} ${country} Town.`);
    }
}
var person1 = {
    firstName: "RAza",
    lastName: "ALy"
}
var person2 = {
    firstName: "Haider",
    lastName: "Jutt"
}
var x = person.fullName.apply(person1, ["Lahore", "Gulberg"]);

let max = Math.max.apply(null, [1, 3, 889, 9]);
console.log(max);
