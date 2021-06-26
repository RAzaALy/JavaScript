const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratingsContainer");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.parentNode.classList.contains("rating")) {
    // console.log(e.target);
    removeActive();
    e.target.parentNode.classList.add("active");
    selectRating = e.target.nextElementSibling.innerHTML;
    // console.log(selectRating);
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <i class= "fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectRating} </strong>
    <p>We'll use your feedback to improve our customer support.</p>`;
});
