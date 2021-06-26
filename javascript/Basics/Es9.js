// es9 features

//1.  speread operator for object 


const person = {name : 'fred' , age : 34, degree : 'MCS'}
const sPerson = {...person , Gamming : "Footbll, circket,tensi,bedminton"}

console.log(person)
console.log(sPerson)


// 2. Flat An Array in js 


const arr = [
    ["zone_1", "Zone_2"],
    ["zone_3", "Zone_4"],
    ["zone_5", "Zone_6"],
    ["zone_7", "zone_7"],
    ["zone_7", "zone_7",["zone_7", ["zone_7"]]]
  ];

// flat has level for flat the array 

// console.log(arr.flat(2))
// console.log(arr.flat(Infinity))



// 3. Object.fromEntries

const persons = {
    name : 'Hayder',
    age : 15,
    nickName : 'harry'
}

// 1. if we have given object and convert it to in to an array then use entries 
// example [[name , hayder] , [age , 15] , [nickName , harry]]

// 2. if we have give below type data and convert it to an object then use fromEntries().
// example  : [[name , hayder] , [age , 15] , [nickName , harry]]

const arrObj = Object.entries(persons) // note that when we use Object.entries(person) then it we be return [[name ,' hayder'] .....] but when we this type data then we use fromEntries(?) to make a key : value pair javascript object . 
console.log(arrObj)
console.log(Object.fromEntries(arrObj));


// 4. trim start and trim end 



  
