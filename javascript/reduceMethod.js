// Reduce Method

//  The reduce() method executes a reducer function(that you provide) on each element of the Array, resulting in single output value.

//  The reducer function takes four arguments:

//  Accumlator
//  current value
//  current index
//  source Array

let arr = [9, 5, 5, 1, 10];
let avg = arr.reduce((accum, currentValue, index, array) => {
    // debugger;
    let total = accum + currentValue;
    if (index == array.length - 1) {
        return total / array.length;
    }
    return total;
    // return accum * currentValue;
    // return accum + currentValue;
});
console.log(avg);
//converting 2D 3D 4D into 1D array
// const array = [
//     ['3', '2'],
//     ['1', '5'],
//     ['3', '8'],
//     ['7', '0']
// ];

// const flatArr = array.reduce((accumlator, currentValue) => {
//     return accumlator.concat(currentValue);
// });
// console.log(flatArr);
const array = [
    ['3', '2'],
    ['1', '5'],
    ['3', '8'],
    ['7', ['3', ['1', '5'],]]
];
console.log(array.flat(Infinity));
