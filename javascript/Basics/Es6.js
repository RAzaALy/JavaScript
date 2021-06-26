//1.  let and const 

// let and const have block scope 
// infact const has ability to not change the value 

// 2. String templates or literals 

let firstName = 'HaYder';
let lastName = 'Aly';
console.log(`First Name : ${firstName}\nLast Name : ${lastName}`);


// 3. Default Arguments 

function mult(a=4,b=5){
    
    return a*b
    
}


console.log(mult(5,2));


// 4. Fat ArrowFunction 

// normal way to write function 

console.log(sum1())

function sum1(){

    return `Sum of Two Number is : ${(a=6)+(b=5)}`

    // let a = 5; b=6;
    // let sum = a+b;
    // return `The Sum Of Two Numbers Is ${sum}`

}

// how to convert in into Fat Arrrow Function 

// const sum = () =>  {

    
//     // return `Sum of Two Number is : ${(a=6)+(b=15)}`
    
// }


const sum = () => `Sum of two numbers is ${(a=44)+(b=21)}`
console.log(sum())



// 5. Array Destructuring 

const mybioData = ['Hayder','Aly',26]


// let myFName = mybioData[0];
// let myLName = mybioData[1];
// let myAge = mybioData[2];


let [myFName,myLName,myAge,myDegree='MCS'] = mybioData ;
console.log(myFName,myLName,myAge,myDegree)
console.log(myDegree)



// const Programmer = ['Hayder','Jutt','Harry',,'Aly','Brad','NajQazi']
// let [Django,Php,Python, ...ReactJs] = Programmer;
// console.log(Django)
// console.log(Php)
// console.log(Python)
// ReactJs.shift(undefined)
// console.log(ReactJs)



// we can add values  tooooo .




// 6. Object Destructuring ... 


let SomeThing = {
    fName : 'Hayder Aly',
    lName : 'Jutt',
    age : 15
}

// let myFname = SomeThing.myFname;
// let myLname = SomeThing.myLname;
// let age = SomeThing.age;
// console.log(myLName);

let {fName,lName,age,Degree = 'MsC'} = SomeThing; 
console.log('\n\n\n\nCheck It \n\n\n\n');
console.log(fName,lName,age)
console.log(Degree);


const Developer = {
    Django : 'Hayder',
    Python : 'Harry',
    ReactJs : 'Aly',
    NextJs : "NajQazi",
    Redux : 'Brad'

}

let {Django,Python, ...ReactJs} = Developer;
console.log(Django)
console.log(Python)
console.log(ReactJs)

//7.  Object Properties 

// we can now use Dynamic Properties . 

// let myName = 'Hayder'

// const bio = {
//     [myName] : 'Hello World', // in this case we can get dynamic data from out of object that take place it . 
//     // 26+2 : 'is my age Error
//     26 : 'is my age',

//     [30 + 6] : '"is my age'
// }

// console.log(bio)


// if value and key are same no need to write both 


let name1 = 'Hayder Aly';
let age1 = 5+10;

// const bio = {
//     name1 : name1, 
//     age1 : age1
// }

const bio = { 
    name1,
    age1
}

console.log(bio)


// 8 . Spread Operator 

// it is used for when we want concate the first array to second array then we can use spread operator it is consedered a dry rule in js and most use in REACT JS  . 


const colors = ['red','green','blue','white']
const mycolors = ['red','green','blue','white','yellow','black']

// IT CAN CONSIDERED A DRY RULES IN JS 

const MyFavClr = [...colors, 'yellow','black']

console.log(MyFavClr)
