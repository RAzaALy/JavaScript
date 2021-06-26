//if,if-else and switch:
let age=50;
// let vari;
// if(age==18){
//     console.log('Your age is 18:');
// }
// else if(age===35){
//     console.log('Your age is 35:');
// }
// else{
//     console.log('You are above 35:');
// }
// // if(vari){
// //     console.log('vari is defined');
// // }
// if(typeof vari!=='undefined'){
//     console.log('Vari is defined:');
// }
// else{
//     console.log('vari not defined:');
// }
// if(age==18 || age==35){
//     console.log('You are above 18:');
// }
if(age==45? 'Your age is 45:':'Your age is not 45');

switch (age) {
    case 18:
        console.log("your age is 18:");  
        break;
    case 35:
        console.log("your age is 35:");
        break;
    case 50:
        console.log("your age is 50:");
        break;

    default:
        console.log("invalid Age:");
        break;
}