// let btn=document.getElementById('btn');
// btn.addEventListener('click',fun1);
// btn.addEventListener('dblclick',fun2);
// btn.addEventListener('mousedown',fun3);


// function fun1(e){
//     console.log('Thanks for Submit:');
//     e.preventDefault();
// }

// function fun2(e){
//     console.log('Thanks for DoubleClick:');
// }
// function fun3(e){
//     console.log('Thanks for Mousedown:');
// }
// document.querySelector('.head').addEventListener('mouseenter',function(){
//         console.log('You entered mouse');
// });
// document.querySelector('.head').addEventListener('mouseleave',function(){
//         console.log('You leave mouse');
// });
document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log('You move mouse');
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX*e.offsetY})`;
    console.log(e.offsetX, e.offsetY);
});