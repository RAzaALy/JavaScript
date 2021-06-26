// The Map() method creates a new array with the resutls of calling a function for every array Element.

const arr = ['raza', 'ali', 'haider'];
console.log(arr[2]);

const newarr = arr.map((value, index, arr) => {
    console.log(value);
    return index + ":" + value + " jutt";
    // console.log(arr);
});
console.log(newarr);
console.log(arr);
//Array of an Object:
const stud = [
    { id: 1, name: "Raza", degree: "Mcs" },
    { id: 2, name: "Hider", degree: "Bcs" },
    { id: 3, name: "Ali", degree: "MIT" },
];

stud.map((value) => {
        console.log(`Id:${value.id} and Name is ${value.name} and complete degree of ${value.degree}`);
});