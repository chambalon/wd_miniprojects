const clock = document.querySelector('.clock');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barSecElement = [];

for(let i=1; i<=12; i++){
  numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
  console.log(numberElement);
}
clock.insertAdjacentHTML('afterbegin',numberElement.join(""));


for(let i=1; i<=60; i++){
  barSecElement.push(`<span style="--index:${i}"><p></p></span>`);
  console.log(barSecElement);
}
barSeconds.insertAdjacentHTML('afterbegin',barSecElement.join(""));


const hourHand = document.querySelector('.hour.hand');
const minuteHand = document.querySelector('.minute.hand');
const secondHand = document.querySelector('.second.hand');

function getCurrentTime(){
  let date = new Date();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  hourHand.style.transform = `rotate(${currentHours*30 + currentMinutes/2}deg)`;
  minuteHand.style.transform = `rotate(${currentMinutes*6}deg)`;
  secondHand.style.transform = `rotate(${currentSeconds*6}deg)`;
}

getCurrentTime();

setInterval(getCurrentTime,1000);