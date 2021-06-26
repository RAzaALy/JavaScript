//Add key-value pair in local storage:
localStorage.setItem('name', 'Ali Raza');
localStorage.setItem('name2', 'Raza jutt');
//Clear the entire local storage:
//localStorage.clear();
//For remove a particular value:
localStorage.removeItem('name');
//Retrive a vlaue from local storage:
let Name = localStorage.getItem('name2');
console.log(Name);

let arr = ['iphone', 'oppo', 'apple'];
localStorage.setItem('Phone', JSON.stringify(arr));
let phone = JSON.parse(localStorage.getItem('Phone'));
console.log(phone);

sessionStorage.setItem('sname', 'Ali Raza');
sessionStorage.setItem('sname2', 'Raza jutt');
sessionStorage.setItem('sPhone', JSON.stringify(arr));