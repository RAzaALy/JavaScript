//Arrow Function in j$:
//creating a normal function:
// const fun=function(){
//     console.log("This is the normal function:");
// }
// fun();
//converting into arrow function:
// const fun=()=>{
//          console.log("This is the normal arrow function:");
//      }
//      fun();
//Return Function:
// const greet=function(){
//     return "Good Morning";
// }
// console.log(greet());

// const greet = () => "Good Morning";
// console.log(greet());

// const greet = () => ({name:"Ali Raza"});

const greet = (name, end) => "Good Morning " + name + end;
console.log(greet('Ali Raza', ' Bye!'));
