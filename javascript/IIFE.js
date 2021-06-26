//Imediately invoked function expression:
function authorName() {
    let aName = "RAza ALy";
    console.log("Author name is " + aName);
}
authorName();

//Grouping Operator ()
(function (aName,lang) {
    // let aName="Raza";
    console.log(`Author name is ${aName} and favourite language is ${lang}`);
})("Raza Jutt","Java$cript");