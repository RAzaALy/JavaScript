// Javascript has six data types that are primitives 


// 1 . undefined typeof instance = "undefined"

console.log(typeof(myundef));

// 2 . string typeof instance = "string"

var myName = 'Haider';
console.log(typeof(myName));

// 3 . number typeof instance = "number"

var myAge = 16;
console.log(typeof(myAge));

// 4. boolean typeof instance = "boolean"

var iamhayder = true;
console.log(typeof(iamhayder));


// 5. bigint typeof instance = "bigint"

// 6. symbol typeof instance = "symbol"


// Data types practice 

console.log(10 + '20');
console.log(9 - '5'); // bug
console.log('java' + 'script');
console.log(" " + 0);
console.log('hayder' - 'aly');
console.log(true + true);
console.log(false + true);
console.log(true + false);
console.log(false - false);
console.log(false - true);


// Null v\s Undefined ?

var iamuseless = null;
console.log(iamuseless);
console.log(typeof(iamuseless)); // 2nd bug object

var iamstandBy;
console.log(iamstandBy);
console.log(typeof(iamstandBy));


// NaN --> not a number

var myphone = 34938434;
var myName = 'Hayder';

// console.log(isNaN(myphone));
// console.log(isNaN(myName));


// if(isNaN(myphone)){

//     console.log('Plz enter correct number for phone ')
// }


// else{
//     console.log('Thanks for this !')
// }


// Practice





console.log(NaN === NaN);

console.log(Number.NaN === NaN);

console.log(isNaN(NaN));

console.log(isNaN(Number.NaN));

console.log(Number.isNaN(NaN));






