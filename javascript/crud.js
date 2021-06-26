//Apply Crud on arry by only one method:
let name = ['ali', 'haider', 'raza', 'harry'];

//create
// const newName = name.splice(name.length, 0, "Jutt");
// console.log(newName);
// console.log(name);

//update
// const newName=name.splice(2,0,"JASIM");
// console.log(name);

//delete
const newName = name.splice(2, 1);
console.log(newName);
console.log(name);