let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('You have click the fetch button:');
    //Intansiate an xhr object:
    const xhr = new XMLHttpRequest();
    //open the object:
    xhr.open('GET', 'ali.txt', true);
    //For POST Request:
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('content-type','application/json');
    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }

    // xhr.onreadystatechange=function(){
    //     console.log('ready state is ',xhr.readyState);}

    //what to do on when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log('Some error occured');
        }
    }
    //send request
    xhr.send();
    console.log('We are done');
}