console.log("This is Promises In JavaScript");

// two things in promise

// 1. promise - fullfilled/resolved
// 2. promises - rejected

// other is Pending

function func1() {

  return new Promise(function (resolve, reject) {

    setTimeout(() => {
        const error = false;
        if(!error){
            console.log("Function : Your Prmise has been resolved");
            resolve();
        }
        else{
            console.log("Function : Your Promise has  been rejected")
            reject('An Error Is occured during promise')
        }
        
    }, 2000);

  });
}


func1().then(function(){
    console.log('Hayder : Thanks for Resolving')
}).catch(function(error){
    console.log('Hayder : Very bad bro rejected ' + error)
})



// function func(){
//     return new Promise(function(resolve,reject) {

//         setTimeout(() => {

//             const error = false;
//             if(!error){
//                 console.log('Your Promises is Full-Filled')
//                 resolve();
    
//             }else{
//                 console.log('Your Promise is Rejects !')
//                 reject('!!! Network Slow Error !!!');
//             }
//         }, 2000);

//     })
// }


// func().then(()=>{
//     console.log('Your data is here ?')
// }).catch((error)=>{
//     console.log("An error is occured please check out this ." + error);
// })

