// 1. 4 ways of writing events in js 

// I . Using Inline Events alert();

// this code is written in event.html so check it 


// II . By calling a function (we already seen and most common way of writing . )

const calling = () => {
    alert('2. Hello this is method 2 for events ')
}

// III. Using inline events (html onclick = '' property and element.onclick) --> use anonymous function

// const third = document.getElementById("third");
// third.onclick = function () {
//   alert("3 . way to ");
// };

// Iv. using events listeners (add event listener and IE'S attachevent) this is very good .


const four = document.querySelector('#four');
four.addEventListener('click', () =>{
  alert('4. way to ')
});

// third.addEventListener(kon sa event , your function) 




//2. what is event object 

// event object is the parent object of the event object . 


//3. mouse event in js 

// mouse event are those events that work with mourse repect 

//4. KeyboardEvent in Js 



//5. inputEvents in js 