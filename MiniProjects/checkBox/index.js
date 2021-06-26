const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => logic(e.target))
);

function logic(cliked) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === cliked) {
      fast.checked = false;
    }
    if (cheap === cliked) {
      good.checked = false;
    }
    if (fast === cliked) {
      cheap.checked = false;
    }
  }
}
