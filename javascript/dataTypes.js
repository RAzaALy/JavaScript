// Data Types in java$cript:
//1 permitive Data Type
//  -string
//  -number
//  -boolean
//  -undefined
//  -null
//  -symbol
//2 Referance Data Type OR non-permitive Data Types:
// -Array
//-Object literal
//-functions
// -Date

//permitivev Data Types:
//string
let name = "Ali Raza Jutt";
console.log('Data Type Is:' + (typeof name));
//number
let number = 34.5;
console.log('Data Type Is:' + (typeof number));
//Boolean
let drive = true;
console.log('Data Type Is:' + (typeof drive));
//undefined
let undef = undefined;
console.log('Data Type Is:' + (typeof undef));
//null
let nul = null;
console.log('Data Type Is:' + (typeof nul));

//Referance Data Types:

//arrray:
let arr = [3, 3.5, 9, false, "string"];
console.log('data Type:' + (typeof arr));
//object literal:
let stMarks = {
    Ali: 89,
    Raza: 34,
    Haider: 90,
    Jutt007: 100
}
console.log((typeof stMarks));
console.table(stMarks);
//Function:
function fun() {
    console.log("Hello world");

}
console.log((typeof fun));
console.log(fun());
//Date:
let date = new Date;
console.log((typeof date));
