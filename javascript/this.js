// this keyword in javascript refers to the object it belongs to.
// "use strict"
//this will call global object
// console.log(this);

// function sum() {

//     var add = 2 + 3;
//     console.log("sum of two number is " + add);
//     console.log(this);
// }
// sum();

const raza = {
    name: "Raza Jutt",
    lang: "java$cript",
    sum: function () {
        console.log(this.name);
        console.log(this.lang);
        var add = 2 + 3;
        console.log("sum of two number is " + add);
        //In method this refers to the owner object.
        console.log(this);

        //In a regular function,this refers to the global object.
        function child() {
            var name = "Raza";
            console.log("child method name " + name);
            console.log(this);
        }
        child();
    }
}
raza.sum();