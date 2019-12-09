
const clockContainner = document.querySelector(".js-clock"),
clockTitle = clockContainner.querySelector("h1");


function getTime(){
const date = new Date();
const minutes = date.getMinutes();
const hours = date.getHours();
const seconds = date.getSeconds('');
clockTitle.innerText = `${
    hours < 10 ? `0${hours}` : hours}:${  //10보다크면  참:거짓(실행) 
   minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds}`;
}


function init() {
getTime();
setInterval(getTime, 1000);
}

init();