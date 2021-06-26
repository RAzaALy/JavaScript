//Loops in j$ for,while and do-while,forEach,for in:
// for (let i = 0; i < 100; i++) {
//     console.log(i);  
// }
// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }
// let k = 1;
// do {
//     if(k===5){
//         k++;
//         continue;
//     }
//     console.log(k);
//     k++;
// } while (k < 10);

let arr = [3, 5, 2, 8, 6];
arr.forEach(function (element,index) {
    console.log(element,index);
});
let obj={
    name:'Ali Raza jutt',
    age: 34,
    type:'Dangerous programmer',
    os: 'ubantu'
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}