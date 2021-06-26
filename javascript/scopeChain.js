//Scope Chain in java$cript:The Scope Chain is used to resolve the value of variable names in javascript.

var a = "hello world!";

function first() {
    var b = "How are You?";
    second();
    function second() {
        var c = "MySelf Raza Jutt";
        console.log(a + b + c);
        three();
    }
}
function three() {
    var d = "plz visit code tech...";
    console.log('hello');
    // console.log(a + b + c + d);
}
first();