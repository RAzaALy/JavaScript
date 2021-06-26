let marks = [23, 45, 67, 89, 23, 54, 80,23,99,232];

const fruits = ["orange", "apple", "banana"];

const mixer = [23, "haider", "343", 333, [12, 34]];

// difference b/w property and methods

// property donot have paranthesis brackets

// methods have paranthesis brakcets

// console.log(mixer.length);
// console.log(Array.isArray(mixer));
// mixer[mixer.length] = 'hyder';
// console.log(mixer)


// let val = marks.indexOf(67);
// console.log(val)
// console.log(marks.indexOf(99));
// console.log(marks.lastIndexOf(23));

// mutating or modifying the array 

// 1. adding element in array 

// marks.push(100)
// console.log(marks)

// marks.unshift(1)
// console.log(marks)


// 2. deleting in array 
// marks.shift() //--> first element

// marks.pop()  //---> last element

// console.log(marks)

// deleting elements with starting and ending point 

// first arrgument means startwith and ready second arrgument means the amount of delete the element number of second arrgument 

let myarr = ['startswith','hayder','aly','jutt','brother','python','javascript']
// myarr.splice(2,3)
// console.log(myarr)

// myarr.splice(2,0 , 'ghayder','galy')
// console.log(myarr)


// // const myarray = [1,2,3,4,5,6,7,8,9,10]
// // myarray.splice(2,3)
// // myarray.splice(2,0,'Hayder','Aly')
// // console.log(myarray)


// 3 . others 

// marks.reverse()
// console.log(marks)


// const marks2 = [1,2,3,4,5,6,7]
// marks = marks.concat(marks2)
// console.log(marks)


const myfunction = (element)=>{
    console.log(element)
}

let myarray = ['haider','ali','jutt','brother']
myarray.forEach(myfunction);

// myarray.forEach((Element,index,array)=>{
//     console.log(Element)
// })

// function myfunction(element,index){
//     console.log(element + ' ' + index)
// }

// myarray.forEach(myfunction)

// myarray.forEach((Element,index,array)=>{
//     console.log(Element)
// })


// let mynumbers = [1,2,3,4,5,6,7]
// var sum = 0;
// mynumbers.forEach((Element,index,array)=>{
//     sum += Element;
// })

// console.log(sum)




// mynumbers.forEach((Element,index,array)=>{
//     console.log(Element*10)
    
// })

