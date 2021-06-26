// ************************** Asynchornous JavaScript *****************************
// Synchronous JavaScript Programming 


// 1. Hositing in JavaScript 

// Hositing in js is a mechanism where variables and functions declarations are moved to the top of their before the code execute . 


console.log(myName)
var myName;
myName = 'Hayder';

// How it will be in output during creation phase . 

var myName;
console.log(myName);
myName = 'Hayder';

// 2. Scope Chain 

// const PI = 3.142;
// const PI;
// PI = 3.142;

// The scope chain is used to resolve the value of variable names in js . 

// scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code . 



// 3. Lexical Scoping in JavaScript

// Lexical scoping means now, the inner function can get access to thier parent functions variable but the vice-versa is not true . 
 

let a = 'Hello Guys'; // Global Scope

const first = () => {
    let b = 'How are You ?'

    const second = () => {
        let c = 'Hii, I am fine thank you .';
        console.log(a);
        console.log(b);
        console.log(c);
    }

    second();
}

first();


// 4. Use Strict Mode 
// first learn 

// console.log('*********use strict mode open and gb')
// "use strict"
// x = 'binod'
// console.log(x)


// 5. This keyword 
// first learn 


// 6. Closures in JavaScript

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)

// when you create a function then closure automatically create in your memory when you want to use it then function automatically fetch the arrgument  in memory . 

const outerFunc = (a) => {
    let b = 10;
    const innerFunc = () =>{
        let sum = a+b; 
        console.log(`The Sum of two no is ${sum}`)
    }

    innerFunc()
}

// outerFunc(5);

// ONE MORE EXAMPLE OF CLOUSER AND LEXICAL SCOPING IN JS . 

const outerFunc1 = (a) => {
    let b = 10;
    const innerFunc1 = () =>{
        let sum = a+b; 
        console.log(`The Sum of two no is ${sum}`)
    }

    return innerFunc1; // part II . 
    // return innerFunc1(); // part I
}
// outerFunc1(2); // part I 

let checkClosure = outerFunc1(29)
checkClosure();

console.dir(checkClosure)





// 7. What is Asynchronous Javascript Programming ? 


// Synchronous in js : It means that one work only at a time . step by step


const func2 = () =>{
    console.log(`Function 2 is called`)
}

const func1 = () =>{
    console.log(`Function 1 is called`)
    func2();
    console.log('Function 1 is called')
}

func1();

// Asynchronous in js : It means that all work done at a time with timing respect . 

console.log('\n\n\n\n')
const function2 = () =>{
    setTimeout(() => {
        console.log('Function 2 is Called')
    }, 2000);
}

const function1 = () =>{
    console.log('Function 1 is Called')
    function2()
    console.log('Function 1 is called again !')
}

function1()


// 8. What is Event Loop ? 

// excution stack 
// web apis
// Message queue 