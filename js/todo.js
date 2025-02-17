const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // json.stringify() => 어떤 코드든 그냥 string으로 바꿔줌
  // json.parse() => string을 js코드로 바꿔줌
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //html에 li 생성
  li.id = newTodo.id;
  const span = document.createElement("span"); //html에 span 생성
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // li에 span 자식으로 넣어줌
  li.appendChild(button);
  toDoList.appendChild(li); //toDoList의 자식으로 넣어줌
}

function handleToDoSubmit(event) {
  event.preventDefault(); //submit할 때 새로고침되는 걸 막음
  const newTodo = toDoInput.value; //copy to the newtodo
  toDoInput.value = ""; //sunmit하면 input의 값을 없애줌

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item) {
  console.log("hello, this is " + item);
}
*/

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // forEach => array 각 요소에 각각 적용하는 것
  // parsedToDos.forEach(sayHello); // 이렇게 함수로 해도 되고,
  // parsedToDos.forEach((item) => console.log("this is  the turn of " + item)); // 이렇게도 가능(arrow function)
  parsedToDos.forEach(paintToDo);
}
