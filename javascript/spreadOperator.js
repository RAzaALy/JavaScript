//spread operator allows an iterable to expand in places where more than one arguments are expected.It is mostly used in variable array where there is more than one values are expected.

//By apply method:

// function sum(a, b, c) {
//     console.log(a + b + c);
// }
// var arr = [3, 2, 8];
// sum.apply(null, arr);

//By spread operator:
// 
// function sum(a, b, c) {
//     console.log(a + b + c);
// }
// var arr = [3, 2, 4];
// console.log(...arr);
// sum(...arr);

let arr1 = [2, 3, 9];
let arr2 = [1, 2, 3];
let arr3 = [11, 22, 33];

// arr1 = arr1.concat(arr2);
arr1 = [...arr1, ...arr2, ...arr3];
// console.log(arr1);

//spread operator replace copy()

let arrc1 = [1, 2, 3];
let arrc3 = [1, 2, 3, 8];
// let arrc2 = arrc1;
// arrc2.push(4, 5);
let arrc2 = [...arrc1, 4, 5, ...arrc3, 9];
console.log(arrc2);
console.log(arrc1);
console.log(arrc3);