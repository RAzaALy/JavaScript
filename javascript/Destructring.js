console.log("Destructring in J$");
//Destructring in J$:
let a, b;
[a, b] = [34, 88];
console.log(a, b);
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
console.log(a, b, c, d);

//Destructring in Object:
({ a, b, c, ...d } = { a: 34, b: 89, c: 83, d: 80, e: 100 });
console.log(a, b, c, d);
const emp = {
  name: "Ali Raza",
  age: 19,
  dep: "IT",
  language: "Java$cript",
  start: function () {
    console.log("Function Started");
  },
};
const { name, age, dep, language, start } = emp;
console.log(name, age, dep, language, start);
start();

//Destructring in Array:
const fruits = ["Apple", "Banana", "Orange"];
[a, b, c] = fruits;
console.log(a, b, c);
