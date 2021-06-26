const toggles = document.querySelectorAll(".faqToggle");
const faq = document.getElementsByClassName("faq");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
