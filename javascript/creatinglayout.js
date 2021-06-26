let a = document;
a=document.all;
Array.from(a).forEach(function (element) {
    console.log(element);
});
a = document.body;
console.log(a);
a = document.forms;
a = document.scripts[0].src;
console.log(a);
