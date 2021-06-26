// Javascript has six type primitive operators

const expersion = 5 + 2;
console.log(expersion)

// 5 and 2 is operand 
// + is operator 
// And the combination of operand and opeator is expersion


// 1 . Assignment Operator 

const x = 5;
const y = 5;

console.log("Is both the x and y are equal or not " + x == y)

// ecmascript6 ---> es6 part 

console.log(`Is both the x and y are equal or not  ${x == y} `);

console.log(x == y);




// 2 . Arithmetic Operator

console.log(3 + 3);
console.log(3 - 3);
console.log(3 * 3);
console.log(3 % 3);
console.log(32 / 3);
console.log(2 ** 5);

console.log(`Remainder of 28 and 5 is : ${28%5}`);

console.log('Remainder of 28 and 5 is : ' + 28%5);


//////// Increment and Decrement 

// postfix increment/decrement is used for increment the value in operation and after operation the value is same .
console.log('Time i started')
var num = 15;
var newnum = num++ + 5;
console.log(num);
console.log(newnum)

var num = 15;
var newnum = num-- + 5;
console.log(num);
console.log(newnum)

// prefix increment/decrement

var num = 15;
var newnum = ++num;
console.log(num);
console.log(newnum);

var num = 15;
var newnum = --num + 5; 
console.log(num);
console.log(newnum);







// 3 . Comparison Operator

var a = 38;
var b = 20;

console.log(a==b)
console.log(a!=b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)


// 4 . Logical Operator

// and,or,not are logical operator

var a = 38;
var b = -20;

console.log(a > b && b > 0);
console.log((a > b) || (b < 0));
console.log(!(a > b || b > 0));
console.log(!false)





// 5 . String Concatination(Operator)

console.log('hello ' + 'world');
const myname = 'Hayder';
console.log(myname+' Aly');


// 6 . Conditional {ternary} Operator

// it takes three operands 

// variableName = (condition)?true:false

var age = 15;

if(age>=18){
    console.log('You are eleigible to vote')
}
else{
    console.log('You are not eleigible to vote')
}

// age = (age>=18)?console.log('You are eleigible to vote'):console.log('You are not eleigible to vote');

console.log((age>=18)?"You are eleigible to vote":"You are not eleigile to vote")




// Practice 

// 1/10 --- 10**-1

console.log(3**3);
console.log(10**-1)
console.log('Hayder ' +  99)

// swapping two number in js


var num = 11;
var num2 = 22;
var temporary = num;

num = num2;
num2 = temporary;
console.log(num2 , num);

var a = 5;
var b = 10;

a = a + b; // 5 + 10 -- 15
b = a - b; // 15 - 10 --- 5
a = a - b; // 15 - 5  --- 10

console.log(a,b);


// Difference Between == vs === ? 

// == is used for check value .
// === is used for check typeof .

var num1 = 5;
var num2 = '5';

console.log(num1 == num2);
console.log(num1 === num2);
console.log() 