// The JavaScript Math Object allows you to perform mathematical tasks on numbers.

// Math property is PI 

const Pi = Math.PI;
console.log(Math.round(Pi));

const number = 3434.634;
console.log(Math.round(number))

console.log(Math.pow(2,4))
console.log(2**4)

console.log(Math.sqrt(81))
console.log(Math.sqrt(66))


console.log(Math.abs(-43))
console.log(Math.abs(4-6))

// ceil method in math can do work if your number has point then it will be increase the number 1 defineatly your number behind is less than 5 . 

console.log(Math.ceil(4.1))
console.log(Math.ceil(99.1))

// floor method in math return the exact number before the decimal number . 
console.log(Math.floor(4.7))
console.log(Math.floor(99.9))

console.log(Math.min(0,3,449,45,4,-34))
console.log(Math.max(0,3,449,45,4,-34))
const myarr = [539,28,34934,348]
console.log(Math.min(...myarr))
console.log(Math.max(...myarr))


console.log(Math.random()*100)
console.log(Math.floor(Math.random()*10) + 10)

const newArryr = ['Hayder','Aly','Jutt','Farman']
const rndmly = Math.floor(Math.random()*newArryr.length)
console.log(newArryr[rndmly])


console.log(Math.trunc(4.6))
console.log(Math.trunc(-99.23))
