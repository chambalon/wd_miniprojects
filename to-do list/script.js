const todoText = document.getElementById('todo-text'),
  addUpdateClick = document.getElementById('addupdateclick'),
  listItems = document.getElementById('list-items');  
let updateText;
let todoData = JSON.parse(localStorage.getItem('todoData'));
if(!todoData){
  todoData = [];
}

todoText.addEventListener('keypress',function(e){
  if(e.key === 'Enter'){
    addUpdateClick.click();
  }
});


ReadToDoList();
function ReadToDoList(){
  todoData.forEach(element => {
    let li = document.createElement('li');
    let style = '';
    if(element.status){
      style = "style = 'textDecoration line-through'";
    }
    const listItem = `<div ${style} ondblclick="CompleteToDoList(this)">${element.item}${style === ""? 
      '<img class="edit todo-controls" onclick="UpdateToDoList(this)">':""} 
      <img class="edit todo-controls" onclick="UpdateToDoList(this)"></div>`;
    li.innerHTML = listItem;
    listItems.appendChild(li);
  });
}


function CreateToDoList(){
  if(todoText.value === ''){
    alert("Please enter your text");
    todoText.focus();
  }
    const listItem = `<div ondblclick="CompleteToDoList(this)">${todoText.value}</div> 
    <div><img class="edit todo-controls" onclick="UpdateToDoList(this)" src="edit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg">
    <img class="delete todo-controls" onclick="DeleteToDoList(this)" src="delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></div>`;
    let li = document.createElement('li');
    li.innerHTML = listItem;
    listItems.appendChild(li);

    if(!todoData){
      todoData = [];
    }
    let todoItem = {item:todoText.value, status:false};
    todoData.push(todoItem);
   

    todoText.value = ''; 
}


function CompleteToDoList(e) {
  if(e.parentElement.querySelector('div').style.textDecoration === ''){
    e.parentElement.querySelector('div').style.textDecoration = 'line-through';
  }

  todoData.forEach(element =>{
    if(e.parentElement.querySelector('div').innerText == element.item){
      element.status = true;
    }
  });
}


function UpdateOnSelection() {
  updateText.innerText = todoText.value;
  addUpdateClick.setAttribute('onclick','CompleteToDoList()');
  addUpdateClick.setAttribute('src','add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg');
  todoText.value =''; 

  todoData.forEach(element => {
    if(element.item == updateText.innerText) {
      element.item = todoText.value;
    }
  });
}


function UpdateToDoList(e) {
  if(e.parentElement.parentElement.querySelector('div').style.textDecoration === ''){
    todoText.value = e.parentElement.parentElement.querySelector('div').innerHTML;
    addUpdateClick.setAttribute('onclick','UpdateOnSelection()');
    addUpdateClick.setAttribute('src','refresh_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg');
    updateText = e.parentElement.parentElement.querySelector('div');
  }
}


function DeleteToDoList(e) {
  let deleteList = e.parentElement.parentElement.querySelector('div').innerText;
  if(confirm(`Are you sure, do you want to delete ${deleteList}?`)){
    e.parentElement.parentElement.parentElement.querySelector('li').remove();
    todoText.focus();

    todoData.forEach(element =>{
      if(element.item == deleteList){
        todoData.splice(element,1);
      }
    });
    SetLocalStorage();
  }
}

function SetLocalStorage(){
  localStorage.setItem('todoData', JSON.stringify(todoData));
}