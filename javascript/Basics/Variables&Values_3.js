// Declaring variables in javascript

// NOTE 

// 1. variable first character is not allowed number or special character.

// 2. first charcter must be letter or $ or underscore (_) .

// 3. variables names are case sensitive.

// 4. you can't use javascript reversed words .



var myName = 'Haider Ali';




// var --> variable(key)
// myName --> varible name 
// 'Haider Ali' --> value of variable 


var channel = 'codewithharry';
channel = 'Codewithsome';
console.log(channel);

// const variable is used  when we want not changed the exit variable  value.

const name1 = 'HayderJutt';
console.log(name1);

// let variable block level scope and only change on its block  and cannot acess in global scope if it is decleared in its own scope like given below. 


{
    let name1 = 'Jutt';
    name1 = 'goriay';
    console.log(name1);
}


console.log(name1);
