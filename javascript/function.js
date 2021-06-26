//also write as const mygreet=function(name,thank){...}
function greet(name, thank = 'Thanks!') {
    console.log(`Good Morning ${name} ${thank}`);
    return 'hello';
}
let name = "Haider Ali";
let name2 = "Ali Raza Jutt"
let retrn = greet(name, "Thanks a lot!");
console.log(retrn);
console.log(greet(name2));

let obj = {
    name: 'Jutt007',
    fun: function () {
        console.log('function in object');
    }
}
console.log(obj.fun());
let arr = ['iphone', 'oppo', 'sumsung'];
arr.forEach(function (element, index) {
    console.log(element, index);

});
//Scope:
// const&let variable has function level scope:
// var variable has block level or global scope: