// Date started in 1 january 1970 UTC.

// Univrse time Control 

// There are four ways to create a new date object in JS 

// I. new Date()
// II. new Date(year,month,day,hours,minutes,seconds,milliseconds)
// III. new Date(milliseconds)
// IV. new Date(date string) 


//1.  Date Methods (get and set)

let currDate = new Date(); // it return current date 
console.log(currDate)
console.log(new Date())
console.log(new Date().toString())
console.log(new Date().toLocaleString())
console.log(Date.now()()) // it returns milliseconds from 1 junary 1970.


// const curDate = Date.now()
// console.log(new Date(curDate).toLocaleString())

// ********** Note That month started in 0 to 11 so remembered it .

/////////***** Create date object */
let newDate = new Date(2020,11,24,18,33,30,0)
console.log(newDate.toLocaleString())

console.log(new Date(2021,2,5).toLocaleString())

console.log(new Date(2021,0).toLocaleString())


let d = new Date("October 13, 2021 11:13:00")
console.log(d.toLocaleString())


var milli = new Date(1618850925906);
console.log(milli.toLocaleString())

// date methods in javascript so lets started 


const MyNewDate = new Date();
console.log(MyNewDate.toLocaleString())
console.log(MyNewDate.getFullYear())
console.log(MyNewDate.getMonth())
console.log(MyNewDate.getDate())
console.log(MyNewDate.getDay())

// set individual date 


const currDate1= new Date()
console.log(currDate1.setFullYear(2022).toLocaleString())
console.log(currDate1.toLocaleString())

//2. Time Methods (get and set)

// get 

const curTime = new Date();
console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());


// set 
console.log('\n\n\n\n Check It \n\n\n\n')
console.log('***** Time')
const curTime1 = new Date()
// console.log(curTime1.setTime())
var check1 = curTime1.setHours(5)
console.log(check1.toLocaleString())
console.log(curTime1.setHours(5));
console.log(curTime1.setMinutes(5));
console.log(curTime1.setSeconds(5));
console.log(curTime1.setMilliseconds(5));


// practice Time 


console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleString());
