const clock = document.querySelector('.clock');
const numberElement = [];

for(let i=1; i<=12; i++){
  numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
  console.log(numberElement);
}

clock.insertAdjacentHTML('afterbegin',numberElement.join(""));