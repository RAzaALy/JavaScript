// es8  features

// 1. String.padding 

// that works in browser console 

const message = 'my name is hayder aly';
console.log(message)
const firstSpc = message.padStart(10)
const lastSpc = message.padEnd(10)
console.log(firstSpc)
console.log(lastSpc)


// 2. Object.values () it returs the single array with only values
// 3. Object.enteries() it returs the array for every pari in object

const person = {name : 'Fred' , age : 15}
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

// challeng 

let mydata = [["name" , 'hayder'],["age" , 15],["class" ,'10th']]
console.log(Object.fromEntries(mydata))

