const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];
btn.addEventListener("click", () =>
  createNotification("Your are login successfully!")
);

function createNotification(msg = null, type = null) {
  //   console.log("clicked");
  const notify = document.createElement("div");
  notify.classList.add("toast");
  notify.classList.add(type ? type : getRandomType());

  notify.innerText = msg ? msg : getRandomMsg();
  toasts.appendChild(notify);
  setTimeout(() => {
    notify.remove();
  }, 3000);
}

function getRandomMsg() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
