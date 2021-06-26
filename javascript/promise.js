// promises in j$:
// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = false;
//             if (!error) {
//                 console.log("Function: Your promise has been resolved");
//                 resolve('Resolving Fulfilled:');
//             }
//             else {
//                 console.log("Function: Your promise has not been resolved");
//                 reject('sorry not fulfilled');
//             }
//         }, 2000);
//     });
// }
// func1().then(function (error) {
//     console.log("Thanks for resolving: " + error);
// }).catch(function (error) {
//     console.log("Very Bad! Reason: " + error);
// })

const student=[
    {name:"Ali Raza",subject:"Java $cript"},
    {name:"Haider Ali",subject:"Python"},
    {name:"Raza",subject:"WebDevelopment"}
]
function enrollStudent(stud){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            student.push(stud);
            console.log('student enrolled');
            const error=false;
            //if error true then reject: const error=true;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
           
        }, 1000);
    })
}
function getStudent(){
    setTimeout(function(){
        let str="";
        student.forEach(function(stud){
            str+=`<li>${stud.name} : ${stud.subject}</li>`;
        });
        document.getElementById('student').innerHTML=str;
        console.log('student fetched');

    }, 3000);
}

let newStudent={name:"Jutt007",subject:"Machine learning"}
enrollStudent(newStudent).then(getStudent).catch(function(){
    console.log('some error has occured');
});
//Function inside then is ran as- resolve();
//Function inside catch is ran as- reject();
