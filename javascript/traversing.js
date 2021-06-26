// let cont=document.querySelector('.container');
// console.log(cont.children);
// console.log(cont.childNodes);
// let nodename=cont.childNodes[1].nodeName;
// let nodeType=cont.childNodes[1].nodeType;
// console.log(nodename);
// console.log(nodeType);
//Node Type:
// 1.  Element
// 2.  Attribute
// 3.  Text Node
// 8.  comment
// 9.  document
// 10. docType
let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children[1]);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
