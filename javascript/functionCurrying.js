//Function Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.for example sum((a),(b),(c),(d));

const sum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;

let add = sum(5)(10)(15)(20)(35);
console.log(add);