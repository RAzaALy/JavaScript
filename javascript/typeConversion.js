// Type Conversion and corrision

let number=String(34);
console.log(number,(typeof number));

let boolean=Number(true);
console.log(boolean,(typeof boolean));

let date=String(new Date);
console.log(date,(typeof date));

let arr=String([2,3,4,5,9]);
console.log(arr.length,(typeof arr));

let i=3;
console.log(i.toString());

let str=Number("3434");
console.log(str,(typeof str));

// let no=parseInt('34.35');
let no=parseFloat('34.35356');
console.log(no.toFixed(8),(typeof no));//to fixed for decimal points for number
//Type coercion:
// let myStr='393';
let  myStr=Number('393');
let myNo=43;
console.log(myStr+myNo);


