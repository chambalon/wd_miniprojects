let img1 = document.getElementById('img1');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let text = document.getElementById('text');
let img2 = document.getElementById('img2');


window.addEventListener('scroll',() =>{
  let value = window.scrollY;

  img1.style.left = value*-1.5+'px';
  img1.style.top = value*1.5+'px';
  img3.style.left = value*1.5+'px';
  img3.style.top = value*1.5+'px';
  img2.style.top = value*-0.3+'px';
  img2.style.left = value*0.8+'px';
  img4.style.left = value*-1.5+'px';
  text.style.marginTop = value*2.5+'px';
});