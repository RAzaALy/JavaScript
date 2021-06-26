console.log('Set Concept');
//set stores unique values:

//initiliaze the constructor:
let mySet2=new Set([1,"Ali",false,{name:"Raza",age:19}]);
console.log(mySet2);
const mySet = new Set();//Initilize an empty Set:
console.log('The Set look Like:', mySet);
//Adding value to this set:
mySet.add('This');
mySet.add('That');
mySet.add('Ali Raza Jutt');
mySet.add(33);
mySet.add(true);
console.log('Now The Set look Like:', mySet);
console.log(mySet.size);//Get the size of Set:
console.log(mySet.has(33));//check 33 is in set or not:
console.log('Before Removal', mySet.has('That'));
mySet.delete('That');//delete a value in a set:
console.log('After Removal', mySet.has('That'));
//Iterating a Set:
for (const item of mySet) {
    console.log('Item:', item);
}
mySet.forEach((item) => {
    console.log(item);
});
//Convert a Set into a Array:
let arr=Array.from(mySet);
console.log("Set in Array form:",arr);
