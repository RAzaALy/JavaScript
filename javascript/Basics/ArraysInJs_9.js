// Array is used for storing multiple values .

// challenge time if you want to sort the element in descending order . 
// ****1

// const fruits = ['Banana','Orage','Apple','Mango']
// fruits.sort()
// fruits.reverse()
// console.log(fruits)

// ***2

// const array1 = [1,30,4,21,1000000,99]
// array1.sort(function(a,b){return a-b})
// console.log(array1)

// ******3 .

// splice section

// splice property note that splice property has infinity for deletion begin to select element to end of an array . 

const months = ["Jan", "march", "April", "June", "July"];

// splice method return the elements

// months.splice(months.length,0, 'dec')

// const updateMonth = months.splice(1,1,'March')

//////////////////////// **2

// const mnth = months.indexOf('march');
// if(mnth!=-1){

//     const updateMonth = months.splice(mnth,mnth,'March')
//     console.log(months)
// }

// else{
//     console.log('march is not present in array .')
// }





//////////********/ 3 .

const deletemnth = months.indexOf("June");
months.splice(deletemnth, 1);
console.log(months);

// 1. first element of array is lower index or lower boundary .

// 2. last element of array is upper index or upper boundary .

// 3. between elements is called also elements of array

var myfriends = ["Haider", "Jutt", "Vinod", "Thapa", 12, true, null, NaN];
// console.log(myfriends);

// 1. Traversal of an Array

// var MyFirends = new Array('Hayder','Aly','Vinod');  //optional and not recomended

var myFriends = ["Haider", "Jutt", "Vinod", "Thapa"];

console.log(myFriends[1]);

// if we want check the length of array

console.log(myFriends.length);
console.log(myFriends[myFriends.length - 2]);

// if we want sort the array

var new1 = myFriends.sort();
console.log(new1);

// if we want change the array element with new element or add new element in array
var alphabet = ["a", "b", "c", "d"];
alphabet[0] = "z"; // override the a element in the array take place it . 
console.log(alphabet);

var alphabet = ["a", "b", "c", "d"];
alphabet[alphabet.length] = "z";
console.log(alphabet);

// use for in loop and for of loop in array

var mycars = ["Lamborghini", "toyota", "suzuki", "Farri"];

// common way to use for loop in array

for (var index = 0; index < mycars.length; index++) {
  console.log(mycars[index]);
}



for (let elements in mycars) {
  console.log(elements);
}

for (let elements of mycars) {
  console.log(elements);
}



// Array.prototype.forEach()

// calls a function foreach element in the array

let channel = [
  "ThapaTechnical",
  "CodeWithHarry",
  "CodeWithTim",
  "MoshHamadani",
  "CodeCamp.org",
];

console.log("\n\n\n");


// ************ forEach is a combination of for in and for of loop.
// we can not use break statement in foreach loop

// it takes a callback function as an arrgument . 

channel.forEach((curentelm,index,array)=>{
  console.log(curentelm)
})




channel.forEach((elements, index, array) => {
  console.log(elements, index, array);
});

// 2. Searching and filter in an Array

// console.log('Searching & Filter \n\n\n')

// find and findIndex are same find/findIndex returns the first element that matches 

var names = ['hayder','aly','jutt','brother','hayder']
var search = names.find((currentElement)=>{
  return currentElement == 'hayder'
})
console.log(search)



// 3. How to sort and compare an Array

//  sort the elements in accesending .

// fruits = ['banana','orange','stawbery','apple']
// fruits.sort()
// console.log(fruits)

//  sort the elements in descending .
// first sort the elements then reverse it

// fruits.sort()
// fruits.reverse()
// console.log(fruits)

// sort the numeric elements in accending

// let numbers = [11,22,4,5,1,500,432]
// numbers.sort(function(a,b){return a-b})
// console.log(numbers)

// sort the numeric elements in descending just reverse the sorted list .

// let numbers = [11,22,4,5,1,500,432]
// numbers.sort(function(a,b){return a-b})
// numbers.reverse()
// console.log(numbers)

// 4. How to insert,Add,Replace and Delete Elements in Array(CRUD)

// ********** adding in array

// const animals = ['pigeons','cats','dogs','sheeps','goats']
// animals.push('cow','buffoles')
// animals.unshift('buffoles','cow')

// animals.pop()
// animals.shift()
// console.log(animals)

// with numbers

// const newarr = [1,2,3,5]
// newarr.unshift(4,6)
// newarr.sort(function(a,b){return a-b})
// console.log(newarr);

// ************* deleting in array

const plants = ["broccoli", "cauliflower", "kale", "tomato", "cabbage"];

console.log(plants);
// console.log(plants.pop())
console.log(plants.shift());
console.log(plants);

// 5. Map(),Filter(),Redue() in array

// ***map create an other array and do not modify original array .

// const number1 = [1, 4, 9, 16, 25];

// let newArry = number1.map((currentElement,index,array) => {
//     return currentElement>9;
// })

// console.log(number1)
// console.log(newArry)

// let newArr = number1.map((element,index,array)=>{
//     return `Index No : ${index} Value is : ${element} Belong To ${array}`
// })

// console.log(newArr)

// challenge time 1


let square = [25, 36, 49, 64, 81];
let squaretotal = square.map((element, index, array) => {
  return Math.sqrt(element);
});

console.log(squaretotal);

// challenge time 2


let numbers = [2,3,4,6,8];
let multiply = numbers.map((element,index,array)=>{
    return element * 2
}).filter((element,index,array)=>{
    return element>10
})

console.log(multiply)

// ****filter

// it is used for filter the element in array .

// const number1 = [1,4,9,16,25]

// let newArry = number1.filter((currentElement,index,array) => {
//     return currentElement>9;
// })

// console.log(number1)
// console.log(newArry)

// ***** reduce method

// Reduce Function take four arrguments

// I.   Accumulator
// II.  Current Value
// iII. Current Index
// IV.  Source Array

let mynumber = [1, 4, 9, 16, 25];


const mysigle = mynumber.map((curentelm)=> curentelm*2).filter((curentelm)=>curentelm>10).reduce((accum,curentelm)=> accum+=curentelm);
console.log(mysigle)

// var sum = 0;
// for(x=0;x<arry2.length;x++){
//     sum+=arry2[x];

// }
// console.log(sum)

// let arr = [5,6,2,23];
// let sum = arr.reduce((accumulator,curelem,index,value)=>{
//     return accumulator += curelem;
// });
// console.log(sum);

// 7 is initial vaule in reduce it means that reduce can has initial value for array . 



// How to Fatten an Array ?

// converting 2d and 3d array in to one dimensional array .

// normal way to flatarray in reduce

const arr = [
  ["zone_1", "Zone_2"],
  ["zone_3", "Zone_4"],
  ["zone_5", "Zone_6"],
  ["zone_7", ["zone_7", "Zone_8"]],
];

let flatArr = arr.reduce((accum, curval) => {
  return accum.concat(curval);
});

console.log(flatArr);

// concat method is used for concatinate the arrays into single array


// returns the array of each entries with index number 
let arrey = ['Hayder','Aly','Jutt','Brother']
entries = arrey.entries()
for (f of entries){
  console.log(f)
}

// returns true only one when all the elements are according to conditions 
var ages = [32, 33, 16, 40];
let check = ages.every(cur =>{
  return cur > 10
})
console.log(check)


// returns true if any value in the array are according to conditions . 

// var newAges = [12,13,34,4]
// console.log(newAges.some(checkAdult))


// fill method fill the array with taking srtring or so on 

// converts the each string character into array element

let from = Array.from('abcdef')
console.log(from)

// includes  method is you know
// join method join the array into string . 

// reduceRight is same as reduce but it reduce the array element in to right . 

// slice method is used for slicing the array . 

// toString method is used for convert the array into string 

// valueOff retuns 

const myNames = ['hayder','aly','jutt','brother']
console.log(myNames.valueOf())