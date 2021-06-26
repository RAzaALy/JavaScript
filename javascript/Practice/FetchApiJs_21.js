console.log("This is fecth Api in js");

let mybtn = document.getElementById('Mybtn');

let content = document.getElementById('content  ')

// fetch is asynchronous  running  in background


// 1 .  ONE 



function getData(){
    // it returns promise 
    console.log('Started Get Data')
    url = 'hayder.txt'
    fetch(url).then((response)=>{
        console.log("Inside First (then)");
        return response.text();
        // return response.json() !! alert !! if you use it then you can do in second (then) parse ,strifgy is automatically maintain the data into strgify and parse . 
    }).then((data)=>{
        console.log('inside Second (then)')
        console.log(data);
    })
}



// 2. TWO 


// function getData(){
//     // it returns promise 
//     console.log('Started Get Data')
//     url = 'hayder.txt'
//     fetch(url).then((response)=>{
//         console.log("Inside First (then)");
//         return JSON.stringify(response)
//     }).then((data)=>{
//         console.log('inside Second (then)')
//         console.log(JSON.parse(data));
//     })
// }





// mybtn.addEventListener('click')
// console.log("Before Get Data")
// getData()
// console.log("After Get Data");



// 3 . THREE 



function postData(){
    url = 'hayder.txt'
    data = 'somethingas Text that api give me'
    let params = {
        method : "post",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify(data) // if data is not in string then we use json.stringify() in this way data object converts in string. 
    }
    fetch(url , params).then((response)=>{
        return response.json
    }).then((data)=>{

        console.log(data)
    })
}

postData()

