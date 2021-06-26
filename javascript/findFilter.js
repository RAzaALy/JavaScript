//find vs filter ==> search
//The find() method returns 1st element that pass the test implemented by the provided fuction:
//The filter() method creates a new array with all elements that pass the test implemented by the provided fuction:

const arr = [2, 8, 13, 9, 44];
// const newArr = arr.find((elem) => {
//     return elem > 12;
// });
// const newArr = arr.findIndex((elem) => {
//     return elem > 12;
// });
const newArr = arr.filter((elem,index,arr) => {
    console.log(`${elem},index no ${index} and ${arr}`);
    return elem > 12;
});
console.log(newArr);
