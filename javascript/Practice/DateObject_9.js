console.log('Welcom to Date Object Concept ')


let today = new Date();
console.log(today.toLocaleString())
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())

// console.log(today)
// console.log(typeof(today))
// let otherDate = new Date('8-4-2003 04:54:43')
// let otherDate = new Date('june 16 1976 ')
// console.log(otherDate)



// console.log(otherDate)
console.log(today.getDay())
console.log(today.getDate())
console.log(today.getMonth())
console.log(today.getMinutes())
console.log(today.getHours())
console.log(today.getMilliseconds())
console.log(today.getTime())


// how to set date and time 

let myDate = new Date('Mon Aug 2003 04:54:00')

console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleDateString())

// console.log(myDate)
// myDate.setDate(23)
// myDate.setMonth(4)
// myDate.setFullYear(2022)
// myDate.setMinutes(1)
// myDate.setHours(2)
// myDate.setSeconds(3)
// console.log(myDate)