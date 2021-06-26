//pass by value and pass by reference
//value of a is permitive and value of b is copy of permitive value

// 1:pass by value 
let a = 5;
let b = a;
b = b + 5;
console.log(a);
console.log(b);

// 2:pass by refernece
const obj = {
    user: "Raza",
    pass: "jutt007"
}
const obj2 = obj;
obj2.pass = "aliraza";
console.log(obj);
console.log(obj2);

const arr1 = [1, 2, 3, 4];
const arr2 = [].concat(arr1);
arr2.push(5);
console.log(arr1);
console.log(arr2);

