//Create a div element
let divElem = document.createElement('div');
//Add text to create element
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode('This is element click to edit it');
}
else {
    text = document.createTextNode(val);
}
divElem.appendChild(text);
//Give element id,style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'element');
divElem.setAttribute('style', 'border:2px solid black; width:230px; height: 150px;margin:10px ;padding:10px');
let container = document.querySelector('.container');
let first = document.getElementById('first')
//Insert the element before the element id first
container.insertBefore(divElem, first);
//Add Event-listner
divElem.addEventListener('click', function () {
    let notextareas = document.getElementsByClassName('textarea').length;
    if (notextareas == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea  class ="textarea" name="text" id="text" cols="30" rows="10">${html}</textarea>`;
    }
    //listen for  blur event on text area
    let textarea = document.getElementById('text');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });
});
console.log(divElem);