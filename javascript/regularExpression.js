//Regular Expression in J$:
let reg = /Ali Raza/;//This is regular expression literal in j$:
// reg = /Ali Raza/g;//g means global:
//  reg = /Ali Raza/i;//i means case Insenstive:
console.log(reg);
console.log(reg.source);
//Functions to match regular Expression:
// 1.exec() ->This function return an array for match and null for no match:
let s = "This is code with Ali Raza also Ali Raza Bhai";
let result = reg.exec(s);
result = reg.exec(s);
console.log(result);
// result = reg.exec(s);
// console.log(result); we can use multiple exec for global flag:-->
// if (result) {

//     console.log(result);
//     console.log(result.index);
//     console.log(result.input);
// }

//2. test()-returns true or flase:
result = reg.test(s);
//  console.log(result); //-->it will only return true if reg is in the string

// 3.match()->It will return an array of results else null:
// let result2=reg.match(s) This is wrong syntax
let result2=s.match(reg); //This is right syntax
// console.log(result2);

// 4.search()-returns index of first match if no match returns -1:
let result3=s.search(/Raza/);
console.log(result3);

// 5.replace()->returns new replaced string with all the replacements(if no global flag is given only first match is replaced):
let result4=s.replace(reg,"JUTT");
console.log(result4);
