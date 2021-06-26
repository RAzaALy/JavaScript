// 0.1 javascript has 5 falsy values

// 0 , "" , undefined , null , NaN ,


// 1. Null v\s Undefined ?

var iamuseless = null;
console.log(iamuseless);
console.log(typeof(iamuseless)); // 2nd bug object

var iamstandBy;
console.log(iamstandBy);
console.log(typeof(iamstandBy));


// 2. NaN --> not a number

var myphone = 34938434;
var myName = 'Hayder';

// console.log(isNaN(myphone));
// console.log(isNaN(myName));


// 3. Difference Between == vs === ? 

// == is used for check value .
// === is used for check typeof .

var num1 = 5;
var num2 = '5';

console.log(num1 == num2);
console.log(num1 === num2);

//  4 . Why Functions ? DRY rule.

// function is used when we use a same piece of code many times . functions may be considered in DRY rule . 

// 5 . differnce b/w getElementById and querySelector 

// getElementById = reference to the element by its ID . 
// if the element with specified id is not in the docuement it weill reuturns null . 


// querySlector  = returns the first element  within the document that matches the specified group of selectors, or null if no matches are found . 

// 6. Differnce between addEventListener and onclick 


// *** I. onclick event only one time run it overRide first code and accept last time code 



// 7. Difference b/w settimeout and setinterval 


// settimeout after few seconds or minutes work and done it and break down.


// setinterval can work repeatly as same as same .


// 8 . differnce b/w HOF AND CBF 

// I. Higher Order Function 

// A function which takes another function as an arguments accept krat hai use HOF


// II. Callback Function 

// A Function which get passes as an argument to another function is called CBF.


// 9. what is difference b/w synchronous and asynchornous in js .

// synchronous 

// 1work = 10min; first done
// 2work = 5s ;  second done

// Asynchronous  

// 1work = 10min; work if next work is take less time than it works normally with it . do it ....

// 2work = 5s ; 

// 10. What is Event Loop in Js . 

