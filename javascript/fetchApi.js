let Btn = document.getElementById('Btn');
let content = document.getElementById('content');
function getData() {
    console.log("Started getData");
    let url = "ali.txt";
    //fetch works in background and work as a Asynchronise:
    fetch(url).then((response) => {
        console.log('Inside first then');
        return response.text();
    }).then((data) => {
        console.log("inside second then");
        console.log(data);
    })
}
console.log('Before running getData');
getData();
console.log('After running getData');

function getData() {
    console.log("Started getData");
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    //fetch works in background:
    fetch(url).then((response) => {
        console.log('Inside first then');
        //response.json means return in json format:
        return response.json();
    }).then((data) => {
        console.log("inside second then");
        console.log(data);
    }) 
}
console.log("Before running getData");
getData();
console.log("After running getData");

function postData() {
    let url="http://dummy.restapiexample.com/api/v1/create";
    let data={"name":"ali","salary":"123","age":"23"};
    //if data is string than we can not convert into json.stringify(data) it is for object
    let params={
        method:'POST',
        headers:{
           'content-type':'application/json'
        },
        body:data
    }
    fetch(url,params).then(response=>response.json())
    .then(data=>console.log(data));
}
postData();
