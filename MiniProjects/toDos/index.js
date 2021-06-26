const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

//Store/Retrive data from localStorage:
const toDos = JSON.parse(localStorage.getItem("todos"));
if (toDos) {
  toDos.forEach((todo) => addTodo(todo));
}

function updateLS() {
  let todosEl = document.querySelectorAll("li");
  const todos = [];
  todosEl.forEach((todo) => {
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
  });
//addTodo into Dom:
function addTodo(todo) {
  let todoTxt = input.value;
  if (todo) {
    todoTxt = todo.text;
  }
  // console.log(todoTxt);
  if (todoTxt) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoTxt;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todos.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}
