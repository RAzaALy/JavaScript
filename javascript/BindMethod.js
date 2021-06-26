//Bind Method():By this method, we can bind an object to a common function,so that the function gives different result when its need.
const obj = {
    name: "Raza Jutt",
    lang: "java$cript",
    framework: "React.Js"
}
const obj2 = {
    name: "Raza",
    lang: "java$cript",
    framework: "React.Js"
}
const obj3 = {
    name: "Jutt",
    lang: "java$cript",
    framework: "React.Js"
}
function feature(rating) {
    console.log(`My name is ${this.name} and my favourite language is ${this.lang} and work on ${this.framework}. I will give ${rating} stars to React Native.`);
}
let fun = feature.bind(obj);
fun(5);
let fun2 = feature.bind(obj2);
fun(4);

// The bind() method takes an object as an first argument and creates a new function.
// let fun2 = obj.feature.bind(obj);
// fun2();