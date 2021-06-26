// Function means a block of code design to perform a particular task .

// function functionName(){
//     statement code
// }

 
// 1. normal function in javascript 


function nopara() {
  var a = 10,
  b = 19;
  var total = a + b;
  // return total
  console.log(total);
}

nopara();

function total(num, num2) {
  return num + num2;
}

console.log(total(20, 34));

// Function parameters v/s Function Arguments

function square(number) {
  return number ** 2;
}

console.log(square(5));


// Why Functions ? DRY rule.

// function expressions and Return Key Word

function sum(a,b){
    return total = a+b
}

// var funExp = sum(5,10);
console.log(`Total of number is ${sum(5,3)}`);


// 2 .  Anonymous Function 

// complete piece of code is called anonymous function expressions.

// the code started with function key word to end complete is called anonymous function 

var funExp = function(a,b){
    return total = a+b;
}

console.log(`The Sum of Two Number is  ${funExp(5, 100)}`);

// 3 . Fat arrow function 

const sum1 = () =>  {    
  return `Sum of Two Number is : ${(a=6)+(b=15)}`
}

console.log(sum1())

const product = (number , number2) =>{
  return number**number2
}

console.log(product(5,5))

const cube = (number) => number**3;
console.log(cube(2))

const quadiletral = (number) => number**4;
console.log(quadiletral(2))




