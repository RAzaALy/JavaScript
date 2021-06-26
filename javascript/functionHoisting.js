//Function hoisting in j$
//function hoisting is a mechanism in which function declaration is on the top of scope before code executation:
sum(5, 35);

function sum(a, b) {
    add = a + b;
    console.log(add);
}