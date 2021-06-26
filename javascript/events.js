document.getElementById('heading').addEventListener('click', function (e)
// document.getElementById('heading').addEventListener('mouseover', function (e)
 {
    console.log("You have click the heading");
    // location.href='//codewithharry.com';
    console.log(e);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // console.log(e.target.id);
    // let variable = Array.from(e.target.classList);
    // console.log(variable);
    // variable=e.offsetX;
    // variable=e.offsetY;
    // variable=e.clientX;
    variable=e.clientY;
    console.log(variable);
});