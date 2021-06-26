console.log("Symbols in J$");
//Symbols in Java$cript:are used for unique values:
let sym = Symbol("This is identifier:");
let sym2 = Symbol("This is identifier:");
console.log(typeof sym);
console.log(sym === sym2);

const a = "This";
const b = "This";
console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('Name');
const k2 = Symbol('age');
myobj = {};
myobj["language"]="Python";
myobj['framework']="Django";
myobj[k1] = "Raza Jutt";
myobj[k2] = "19";
console.log(myobj);
// console.log(myobj.k1);//can not do this it is same as myobj["k1"];
console.log(myobj [k1]);
console.log(myobj [k2]);
console.log(myobj['language']);
//symbols are ignored in for in loop:
for(key in myobj){
    console.log(key,myobj[key]);
}
//symbols are ignored in JSON.stringfy();
console.log(JSON.stringify(myobj));