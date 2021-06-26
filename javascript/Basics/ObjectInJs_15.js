
// what is object literals ?

// object is key value pair datastructure 
// example 
// key : value 

// 1st Way for object literals 


// in object function has scope this for object 

let BioData1 = {
    myName : 'Hayder Aly',
    myAge :  26,
    getData : function(){
        return `My Name is ${this.myName} and My Age is ${this.myAge}`
    }
}


console.log(BioData1.myName);
console.log(BioData1.myAge);
console.log(BioData1.getData());




// 2nd way for object literals in js


let BioData2 = {

    myName : 'Jutt Aly',
    myAge :  43,
    getData(){
        return `My Name is ${this.myName} and My Age is ${this.myAge}`
    }
}

console.log(BioData2.getData());


// 3. other thing about object in js 


// what if we want object as a value inside an object . 

let BioData = {

    myName : 'Jutt Aly',
    myAge :  43,
    OtherObject : {
        hobbies : 'Farming',
        games : ['Football','cricket']

    },
    
    getData(){
        return `My Hobbies is ${this.OtherObject.hobbies} and My Age is ${this.myAge}`
    }
}


console.log(BioData.getData());
console.log(BioData.OtherObject.games)



// 4. other  What is this object in js?

// it contains the current context . 
// the this object can have different values depending on where it is placed. 

// console.log(this.alert('Awesome'))

// this object is belong to window you can say that like it is a part of window.

// it referts to the current context and that is window global object 


///// 2nd exmpl

// function myName(){
//     console.log(this)
// }

// myName()


// 4th exmpl in this case this has object current context so it

const obj1 = {
    myAge : 26,
    myName(){
        console.log(this.myAge);
    }
}

obj1.myName();


// 5th exmple 
// this object will not work with arrow function 




const obj = {
    myAge : 26,
    myName : ()=>{
        console.log(this);
    }
}

obj.myName();




let bioData  = {
    myName : {
        realName : 'Hayder',
        channleName : 'HayderTech'
    },

    myAge : 26,

    getData1(){
        console.log(`My Name is ${this.myName.channleName} and Age is ${this.myAge}`)
    }
}


bioData.getData1()


// Object Properties 

// we can now use Dynamic Properties . 



let myName = 'Hayder'

const bio1 = {
    [myName] : 'Hello World', // in this case we can get dynamic data from out of object that take place it . 
    // 26+2 : 'is my age Error
    26 : 'is my age',

    [30 + 6] : '"is my age'
}

console.log(bio1)


// if value and key are same no need to write both 
console.log('\n\n\n\nCheck It \n\n\n\n\n')


let name1 = 'Hayder Aly';
let age1 = 5+10;

// const bio = {
//     name1 : name1, 
//     age1 : age1
// }



const bio = { 
    name1,
    age1
}

console.log(bio)