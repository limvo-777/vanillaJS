const clockContainer = document.querySelector(".js-clock")
const clockText = clockContainer.querySelector("h1")

function getTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockText.innerText = `${hours<10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
  setInterval(getTime,1000);
}

function init(){
  getTime();
}

init()