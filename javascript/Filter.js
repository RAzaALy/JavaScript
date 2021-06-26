//The filter() method creates a new array with all elements that pass the test implemented by the provided fuction:

// null==undefined result is true
const data = [
    { name: 'ali', age: 19 },
    { name: 'raza', age: 21 },
    { name: 'robert', age: null },
    { name: 'john', age: undefined },
    { name: 'null', age: undefined }
];
const Data = data.filter((elem) => {
    if (elem.age != null) {
        return elem;
    }
});
console.log(Data);