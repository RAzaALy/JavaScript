// Selector in j$:
// 1. single element selcector
// 2. Multi element selector
let element = document.getElementById('first');
// element=element.className;
// element=element.childNodes;
// element=element.innerText;
// element=element.parentNode;
// element.style.color='red';
// element.innerText='Ali is a good boy';
// element.innerHTML="<b>Ali Is a Good Boy</b>"
// console.log(element);

//Query Selector:
// let sel=document.querySelector('#first');
// sel=document.querySelector('.child');
// sel=document.querySelector('div');
// sel.style.color='green';
// console.log(sel);

// 2: Multi selector
let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');
elem = document.getElementsByTagName('div');
// console.log(elem);
// for (let index = 0; index < elem.length; index++) {
//     console.log(elem);
//     element.style.color = 'blue';
// }
Array.from(elem).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});

