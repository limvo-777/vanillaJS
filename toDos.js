const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul");

const TODOS_LS = "toDos";
let todos = [];

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = todos.filter(function(todo){
    return todo.id !== parseInt(li.id);
  })
  todos =cleanToDo;
  savetodos();
}

function orderId(){
  const len = todos.length;
  for (i=0; i<len; i++){
    todos[i].id = i+1;
  }
}

function savetodos(){
  orderId();
  localStorage.setItem(TODOS_LS,JSON.stringify(todos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("botton");
  delBtn.innerText = "❌";  
  delBtn.addEventListener("click",deleteToDo);
  const span =document.createElement("span");
  const newId =todos.length+1;
  span.innerText=text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id=newId;
  toDoList.appendChild(li);
  const toDoObject = {
    text:text, id:newId
  }
  todos.push(toDoObject);
  savetodos();


}
  
  
  
  function handlesubmit(event){
  event.preventDefault();
  const toDoValue = toDoInput.value;
  paintToDo(toDoValue);
  toDoInput.value="";
}

function loadToDos(){
  const loadtoDos = localStorage.getItem(TODOS_LS);
  if (loadtoDos !==null){
    const parseToDos = JSON.parse(loadtoDos);
    parseToDos.forEach(function(todo){
      paintToDo(todo.text);
    })
  }
}


function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handlesubmit)
  
}

init();