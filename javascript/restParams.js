//Rest Parameters is an improved way to handle function parameter,allowing us to more easilty handle various input as parameters in a function.The rest parameter syntax allows us to represent in indefinite number of arguments as an array:

//ES5
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(1, 2, 3, 4, 5);

//ES6
// function sum(...input) {
//   //   console.log(input);
//   console.log(...input);
//   let total = 0;
//   for (let i of input) {
//     total += i;
//   }
//   console.log(total);
//   return total;
// }
// let add = sum(1, 2, 3, 4, 5, 6, 7, 22);
// console.log(add);

function fun(a, b, ...c) {
  console.log(`${a} ${b}`);
  console.log(c);
  console.log(...c);
  console.log(c[0]);
  console.log(c.length);
  console.log(c.indexOf("Flux"));
}
fun("React", "Angular", "VueJs", "Redux", "Flux", "TypeScript");
