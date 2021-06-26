console.log("For Loops Which is used for in & for of");
//for In:
let obj={
    name:"Ali Raza",
    age:19,
    language:"Python",
    framework:"Django"
}
//Iterating of object by traditinal for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }
//iterating of object by for in loops:
for(let keys in obj)
{
    console.log(obj[keys]);
}
//iterating an string by for in loops:
let str="My name is Ali Raza";
// for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     console.log(element);
// }
// for(let char in str)
// {
//     console.log(str[char]);
// }

//for of:
let arr=["Ali","Jutt","Haider","Raza jutt","Harry"];
for (const name of arr) {
    console.log(name);
}
// for (const name of str) {
//     console.log(name);
// }