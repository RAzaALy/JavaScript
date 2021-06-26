// **String is a collection of characters in double or single quotes 

let myName = 'Vinod Thapa';
let myChannel = 'Thapa Technical';

let cName = new String('FreeCodeCamp.org')

console.log(myName)
// console.log(cName)

console.log(myName.length)


// 1.  Escape Character in string 
// Escape character are same as 

// let anysentence = 'We are the so-called "Vikings" from the north.'

let anysentence = `We are the so-called 'Vikings' from the north.`

console.log(anysentence)


// 2. finding a string a string.


const mybioData = 'i am the haider aly the hayder'
  
console.log(mybioData.length)

console.log(mybioData.indexOf('the'))
console.log(mybioData.indexOf('a',3))
console.log(mybioData.lastIndexOf('the'))


// 3. searching for a string in a string .  returns the start index of specific word that you search


let newdata = 'I am  Hayder Aly'
var sData = newdata.search('Hay')
console.log(sData)
console.log('\n\n\n Test')

// 3 . Extracting String parts 

// ************ Slice 

var str = 'apple, banana, kiwi'


// console.log(str[3])
// let res1 = str.slice(0,5)
// let res1 = str.slice(7,-2)
// console.log(res1)
// console.log(res)

// challenge time 

const mywords = 'My name is hayderhayder aly jutt so let"s  started my bro';
// console.log('startd my brother')
console.log(mywords.slice(6))
let permission = mywords.slice(0,21);
// for half character display 
let leng = mywords.length
console.log(mywords.slice(0,leng/2))
console.log(permission);



// ************ substring 

// it is similar to slice method but it is not support the negative indexes . 

let str1 = 'Apple , Banana , Kiwi'
// let rep = str.substring(0,5)
// let rep = str1.substring(8,-2)
let rep = str1.substring(8) // if first index is not present then it go in last index.
console.log(rep)


// *********** substr 
 
var names = 'haider, aly, jutt'
// let myres = names.substr(0,4)
let myres = names.substr(4)
let myres = names.substr(7,-2)
// let res = str.substr(-4)
console.log(myres)


// 4. replacing string content

let MyBioData = `I am Hayder Aly Jutt Goriya Hayder`
// syntax for replace() method

// string.replace(searchFor,ReplaceWith)

let search = MyBioData.replace('Hayder' , 'Haider')
console.log(search)



// 5 . Extracting String characters 

// there are 3 methods 

// ************ charAt
let hello = 'HELLO WORLD';
// console.log(hello[3])
console.log(hello.charAt(0))


// ************** charCodeAt


let world = 'Hello world'
console.log(world.charCodeAt(4))


// ------ challenge time
let challenge = 'challenge WorlD'
console.log(challenge.charCodeAt(challenge.length-1))

// ********** property access 

let newstr = 'Hello world in coding'
console.log(newstr[7])


// other usefull Methods 

// only one string for all methods

const mystring = 'haider is a good boy'
const mystring2 = 'goriya'
// ***********touppercase / tolowercase

console.log(mystring.toUpperCase())
console.log(mystring.toLowerCase())

// ************* concat 

// es6 `` is better than concat 
console.log(mystring.concat(' ',mystring2))

// \\ ***********trim 

let trimstr = '      Hello World !    '
console.log(trimstr.trim())


// *************** endswith / startswith 

const BioData = 'I am Hayder Aly Jutt Groiya'
 
// console.log(mybioData.endsWith('hayder'))

// console.log(mybioData.startsWith('i'))

// ********************** split the string 

// console.log(BioData.split(' '))

const txt = "a,b,c,d,e"
console.log(txt.split(','))
console.log(txt.split())


// str = 'hayder'
// str.charAt(0) -> means that which element is present in 0 index.
// str.charCodeAt(0) -> means that which elemetn is present in 0 index its charCode kia hai.
// String.fromCharCode(65) which element code is 65 = a
// includes() , 
// repeat method  repeat the string in counterNumber argument 

// let nes = 'hayder'
// let res = nes.repeat(2)
// console.log(res)

