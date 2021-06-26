//Default Function parameters allow named parameters to be initialized with default values if no value or undefined is passed

// Traditional method:
// function mult(a, b) {
//     b = (typeof b !== 'undefined') ? b : 1;
//     console.log(a*b);
// }
// mult(4);

//Default parmeters:

// function mult(a, b = 1) {
//     console.log(a * b);
// }
// mult(4);

const mult = (a, b = 1) => { console.log(`The mult of ${a} and ${b} is :${a * b}`) }
mult(3,34);

//Swaping of two numbers:

// const swap = (a, b) => {
//     console.log(`The value of a:${a}`);
//     console.log(`The value of b:${b}`);
//     let temp;
//     temp = a;
//     a = b;
//     b = temp;
//     console.log("After Swaping");
//     console.log(`The value of a:${a}`);
//     console.log(`The value of b:${b}`);
// }
// swap(33, 8);