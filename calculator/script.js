let display = document.getElementById('display')

let number = document.querySelectorAll('.numbers').forEach(function(number){ 
  number.addEventListener('click',function(e){
    if(display.innerText === '-'){
      display.innerText = '';
    }
    if(display.innerText === '0'){
      display.innerText = '';
    }
    display.innerText += e.target.innerHTML;
  })
});

let operator = document.querySelectorAll('.operations').forEach(operator =>{
  operator.addEventListener('click',function(e){

    let lastValue = display.innerText.substring(display.innerText.length,display.innerText.length-1)
   
    if(!isNaN(lastValue) && e.target.innerHTML == '='){
      display.innerText = eval(display.innerText)
    }
    else if(e.target.innerHTML == 'AC'){
      display.innerText = '-';
    }
    else if(e.target.innerHTML == 'DEL'){
      display.innerText = display.innerText.substring(0, display.innerText.length-1);
      if(display.innerText.length == 0){
        display.innerText = "-";
      }
    }
    else if(!isNaN(lastValue)){
      display.innerText += e.target.innerHTML
    }

  })
})