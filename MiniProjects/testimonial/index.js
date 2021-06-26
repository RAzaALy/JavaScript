const testimonialContainer = document.querySelector(".testimonialContainer");
const testimonial = document.querySelector(".testimonial");
const userImg = document.querySelector(".userImg");
const username = document.querySelector(".username");
const Role = document.querySelector(".role");

const testimonials = [
  {
    name: "RAza ALy",
    role: "Web Developer",
    img: "./us.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo vero harum. Velit eveniet sint excepturi magni quaerat nesciunt aspernatur debitis a! Ea numquam ipsum ut, esse maiores iusto sit rem tempore voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum consectetur magni perferendis nesciunt sed?",
  },
  {
    name: "Hayder ALy",
    role: "Python Developer",
    img: "./us.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo vero harum. Velit eveniet sint excepturi magni quaerat nesciunt aspernatur debitis a! Ea numquam ipsum ut, esse maiores iusto sit rem tempore voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum consectetur magni perferendis nesciunt sed?",
  },
  {
    name: "ALy RAza",
    role: "Fronted Developer",
    img: "./us.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo vero harum. Velit eveniet sint excepturi magni quaerat nesciunt aspernatur debitis a! Ea numquam ipsum ut, esse maiores iusto sit rem tempore voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum consectetur magni perferendis nesciunt sed?",
  },
  {
    name: "3 Brothers",
    role: "Full Stack Developer",
    img: "./us.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo vero harum. Velit eveniet sint excepturi magni quaerat nesciunt aspernatur debitis a! Ea numquam ipsum ut, esse maiores iusto sit rem tempore voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum consectetur magni perferendis nesciunt sed?",
  },
];
let index = 0;
function updateTestimonial() {
  //   console.log(testimonials[0]);
  const { name, role, img, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImg.src = img;
  username.innerHTML = name;
  Role.innerHTML = role;
  index++;
  if (index > testimonials.length - 1) {
    index = 0;
  }
}
setInterval(() => {
  updateTestimonial();
}, 8000);
