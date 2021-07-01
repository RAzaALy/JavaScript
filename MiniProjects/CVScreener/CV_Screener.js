// console.log('Welcome to Cv Screener');
//Data is an array of object which contains information about the Candiataes:
const data = [
  {
    name: "Ali Raza",
    age: "19",
    city: "Layyah",
    language: "Java$cript",
    framwork: "jQuery",
    image: "hack.jpg",
  },
  {
    name: "Hider Ali",
    age: "16",
    city: "Layyah",
    language: "Python",
    framwork: "Angular",
    image: "had.jpg",
  },
  {
    name: "Raza Jutt",
    age: "19",
    city: "Layyah",
    language: "PHP",
    framwork: "React",
    image: "hack.jpg",
  },
  {
    name: "RAza",
    age: "22",
    city: "Lahore",
    language: "C++",
    framwork: "Bootstrap",
    image: "hack.jpg",
  },
  {
    name: "ALy",
    age: "25",
    city: "Chowk Azam",
    language: "PHP",
    framwork: "Larevale",
    image: "had.jpg",
  },
  {
    name: "Harry",
    age: "13",
    city: "Faislabad",
    language: "Node Js",
    framwork: "Spring Boot",
    image: "hack.jpg",
  },
  {
    name: "Jack",
    age: "22",
    city: "Faislabad",
    language: "Visual Basic",
    framwork: ".NET Framework",
    image: "had.jpg",
  },
];

//CV iterator:
function CViterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

//Button Listner for next button:
const candidate = CViterator(data);

const next = document.getElementById("next");

const nextCv = () => {
  const currentCandidate = candidate.next().value;
  let profile = document.getElementById("profile");
  let container = document.getElementById("container");
  if (currentCandidate !== undefined) {
    container.innerHTML = `   
       <div class="w3-card-4" id="profile" style="width:60% ;margin: auto;">
      <header class="w3-container w3-light-grey">
          <h3>${currentCandidate.name}</h3>
      </header>
      <div class="w3-container">
          <p>${currentCandidate.language}</p>
          <hr>
          <img src="${currentCandidate.image}" id="image" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="height: 60px; width: 60px;">
          <p><br>
          <ul class='listGroup'>
          <li>Lives In:${currentCandidate.city}</li><hr>
    <li>Primirly Works on ${currentCandidate.language}</li><hr>
    <li>Uses ${currentCandidate.framwork}</li><hr>
    </ul>
          </p><br>
      </div>
          <button class="w3-button w3-block w3-dark-grey" style="outline: none;" id="next" onclick="nextCv()" >Next</button>
  </div>`;
  } else {
    alert("End of Candidate Application:");
    window.location.reload();
  }
};

next.addEventListener("click", nextCv);
