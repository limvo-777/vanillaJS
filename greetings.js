
const form = document.querySelector(".js-form"), input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_CN ="currentName", SHOWING_CN="showing";
// localStorage.removeItem("currentName");

function saveName(name){
  localStorage.setItem(USER_CN,name);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintUser(currentValue);
  saveName(currentValue);
}

function askforName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit",handleSubmit)
}

function paintUser(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText =`Hello ${text}`;
  
}

function loadName() {
  const currentUser = localStorage.getItem(USER_CN);
  if(currentUser===null){
    askforName();
  }else{
    paintUser(currentUser);
  }
  
}

function init(){
  loadName();
}

init();