//String in j$
const name = "Ali Raza Jutt";
const greet = " Good Morning";
// console.log(name+greet);
// console.log(name.toUpperCase());
console.log(name.concat(greet));
let html = "<h1>This is Heading</h1>" +
    "<p>This is a Paragraph</p>";
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(13));
// console.log(html.endsWith('</p>'));
// console.log(html.startsWith('<'));
// console.log(html.includes('adfdf'));
// console.log(html.substring(1,6));
// console.log(html.slice(-7));
// console.log(html.split('a'));
// console.log(html.replace('This', 'That'));

//Template literals
let fruit1 = 'orange';
let fruit2 = 'Banana';
let htm = `<h1>Heading</h1>
           <b>You like ${fruit1} and ${fruit2}:</b>`;
           document.body.innerHTML = htm;