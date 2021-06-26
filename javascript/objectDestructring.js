//The Destructring assignement syntax is a java$cript expression that maeks it possible to unpack values from arrays, or properties from objects, into distinct variables.

//Array Destructring:

// let a = 5;
// let b = 8;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//Object Destructring:
const Data = {
    name: "RAza ALy",
    age: 20,
    language: "Java$cript",
    greet:function () {
        console.log(`Hello,${this.name}`);
    },
    framework: {
        first: "React",
        sec: "Angular"
    }
}
// let {name,age,language} = Data;
// console.log(`My name is ${name} and I am ${age} years old.My favourite language is ${language}.`);

//We can rename property of object:
let { name: myName, age: old, language: lang, framework: frame } = Data;
console.log(`My name is ${myName} and I am ${old} years old.My favourite language is ${lang}.My favourite framwork is ${frame.first}.${Data.greet()}`);
