//object.prototype:
// let object={
//     name:"Ali Raza Jutt",
//     age:19,
//     adress:"Lahore"
// }
// console.log(object);
//we can make a prototype for only cunstractor that we are made:
function Obj(givenName) {
    this.name = givenName;
}
Obj.prototype.getName = function () {
    return this.name;
}
Obj.prototype.setName = function (newName) {
    this.name = newName;
}
let obj1 = new Obj("Ali Raza");
let obj2 = new Obj("Raza jutt");
console.log(obj1);
console.log(obj2);