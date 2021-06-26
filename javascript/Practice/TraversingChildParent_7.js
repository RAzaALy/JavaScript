

let sel = document.querySelector('.child');
sel = document.querySelector('.container');

console.log(sel.childNodes)
console.log(sel.children)

console.log(cont.lastElementChild.previousElementSibling)

let nodeName = sel.childNodes[1].nodeName;
let nodetype = sel.childNodes[4].nodeType;
console.log(nodeName)
console.log(nodetype)
// let nodeType = 
// NODE TYPE 
// 1 . element 
// 2. attribute . 
// 3. text node . 
// 4. comment 
// 5. document
// 6. doctype 
