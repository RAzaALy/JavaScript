// 1. Event Propagation (Event Bublling and Event Capturing )

// The Event propagation mode determines in which order the elements receive the event.

// 2. Higher Order Function

// A function which takes another function as an arguments accept krat hai use HOF

// 3. Callback Function

// function which get passes as an argument to another function is called CBF.

const add = (a, b) => a + b;
const subs = (a, b) => Math.abs(a - b);
const mult = (a, b) => a * b;

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

console.log(calculator(3, 7, subs));

// 4. Function Curying (we will see after Async JS section)

// Currying Function

// sum(5)(3)(8) problem

// const  sum = (num1) => {
//     console.log(num1)
//     return (num2) => {
//         console.log(num1,num2)
//         return (num3) => {
//             console.log(num1,num2,num3)
//             console.log(num1+num2+num3)
//         }
//     }
// }
// sum(5)(2)(3)

const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
sum(15)(13)(18);

// 5. What is callback in javascript ?
// Avoid Callback Hell to use Promises 

setTimeout(() => {
  console.log(`1 work is done`);
  setTimeout(() => {
    console.log(`2 work is done.`);
    setTimeout(() => {
      console.log(`3 work is done.`);
      setTimeout(() => {
        console.log(`4 work is done.`);
        setTimeout(() => {
          console.log(`5 work is done.`);
          setTimeout(() => {
            console.log(`6 work is done.`);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);



