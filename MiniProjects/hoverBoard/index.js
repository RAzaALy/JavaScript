const container = document.getElementById("container");

const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  " #FF6F61",
  "#9B1B30",
  "#77212E",
  "#F5D6C6",
  " #FA9A85",
  " #5A3E36",
  "#CE5B78",
  "#E08119",
  "#2A4B7C",
  " #577284",
  "#264E36",
  "#2A293E",
  "#9F9C99",
  "#797B3A",
  "#9E1030",
  "#FE840E",
  "#FF6F61",
  "#C62168",
  "#FFD662",
  "#8D9440",
  "#00539C",
  "#755139",
  "#D69C2F",
  "#E8B5CE",
  "#343148",
];
const squares = 500;
for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  // console.log('set Color',element);
  const color = getRandomColor();
  //   console.log(color);
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function removeColor(element) {
  //   console.log("remove Color", element);
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
