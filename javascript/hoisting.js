// Exercise on hoisting:
console.log("I am a " + job);
var job = "Web Developer";
console.log("I am a " + job);

function fun() {
    console.log("I am a " + job);
    var job = "Full Stack";
    console.log("I am a" + job);
}
fun();

//creation phase
// var job=undefined;
// console.log("I am a " + job);
// job = "Web Developer";
// console.log("I am a " + job);

// function fun() {
// var job=undefined;
//     console.log("I am a " + job);
//     job = "Full Stack";
//     console.log("I am a" + job);
// }
// fun();