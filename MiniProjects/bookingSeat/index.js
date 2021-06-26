const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;
// console.log(ticketPrice);

populateUI();

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//for update seat count:
function updateSelectCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  //   console.log([...seats]);
  //   console.log(seatsIndex);
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectSeatsCount = selectedSeats.length;
  // console.log(selectSeatsCount);
  count.innerHTML = selectSeatsCount;
  total.innerHTML = selectSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  let selectedMoviePrice = localStorage.getItem("selectedMoviePrice");
//   ticketPrice = selectedMoviePrice;

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//update total price according to movie price:
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  // console.log(ticketPrice);
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectCount();
});

container.addEventListener("click", (e) => {
  // console.log(e.target);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectCount();
  }
});

// Initial count and total set
updateSelectCount();
