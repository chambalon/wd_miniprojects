const todoText = document.getElementById('todo-text'),
  addUpdateClick = document.getElementById('addupdateclick'),
  listItems = document.getElementById('list-items'),
  alertMessage = document.getElementById('alertmessage');  
let updateText;
let todoData = JSON.parse(localStorage.getItem('todo-Data'));
if(!todoData){
  todoData = [];
}

todoText.addEventListener('keypress',function(e){
  if(e.key === 'Enter'){
    addUpdateClick.click();
  }
});


function CreateToDoList(){
  SetAlertMessage("");
  if(todoText.value === "") {
    SetAlertMessage("Please enter your text");
    todoText.focus();
  }else{
  let li = document.createElement('li');
  const listItem = `<div ondblclick="CompleteToDoList(this)">${todoText.value}</div> 
  <div><img class="edit todo-controls" onclick="UpdateToDoList(this)" src="edit.svg">
  <img class="delete todo-controls" onclick="DeleteToDoList(this)" src="delete.svg"></div>`;
  li.innerHTML = listItem;
  listItems.appendChild(li);

  if(!todoData){
    todoData = [];
  }
  let todoItem = {item:todoText.value, status:false};
  todoData.push(todoItem);
  SetLocalStorage()

  todoText.value = ''; 
  SetAlertMessage("New task created successfully");
  }
}


function CompleteToDoList(e) {
  if(e.parentElement.querySelector('div').style.textDecoration === ''){
    e.parentElement.querySelector('div').style.textDecoration = 'line-through';
    e.parentElement.querySelector('img.edit').remove();
  }

  todoData.forEach(element =>{
    if(e.parentElement.querySelector('div').innerText == element.item){
      element.status = true;
    }
  });

  SetAlertMessage("Task completed successfully");
}

function ReadToDoList(){
  todoData.forEach(element => {
    let li = document.createElement('li');
    let style = '';
    if(element.status){
      style = "style = 'textDecoration line-through'";
    }
    const listItem = `<div ${style} ondblclick="CompleteToDoList(this)">${element.item}${style === ""? 
      '<img class="edit todo-controls" onclick="UpdateToDoList(this)" src="edit.svg">':""} 
      <img class="delete todo-controls" onclick="DeleteToDoList(this)" src="delete.svg"></div>`;
    li.innerHTML = listItem;
    listItems.appendChild(li);
  });
}
ReadToDoList();


function UpdateOnSelection() {
  todoData.forEach(element => {
    if(element.item == updateText.innerText) {
      element.item = todoText.value;
    }
  });

  SetLocalStorage();

  updateText.innerText = todoText.value;
  addUpdateClick.setAttribute('onclick','CreateToDoList()');
  addUpdateClick.setAttribute('src','add.svg');
  todoText.value =''; 
  SetAlertMessage("To-do list updated successfully");
}


function UpdateToDoList(e) {
  if(e.parentElement.parentElement.querySelector('div').style.textDecoration === ''){
    todoText.value = e.parentElement.parentElement.querySelector('div').innerText;
    addUpdateClick.setAttribute('onclick','UpdateOnSelection()');
    addUpdateClick.setAttribute('src','refresh.svg');
    updateText = e.parentElement.parentElement.querySelector('div');
    todoText.focus();
  }
}


function DeleteToDoList(e) {
  let deleteList = e.parentElement.parentElement.querySelector('div').innerText;

  if(confirm(`Are you sure, do you want to delete ${deleteList}?`)){
    e.parentElement.parentElement.remove();
    e.parentElement.parentElement.setAttribute('class','deleted-item');
    todoText.focus();

    todoData.forEach(element =>{
      if(element.item == deleteList){
        todoData.splice(element,1);
      }
    });
    SetLocalStorage();
    SetAlertMessage("To-do list deleted successfully");

  }
}

function SetLocalStorage(){
  localStorage.setItem('todo-Data', JSON.stringify(todoData));
}


localStorage.clear();

function SetAlertMessage(message){
  alertMessage.removeAttribute('class');
  alertMessage.innerText = message;

  setTimeout(()=>{
    alertMessage.classList.add('toggle');
  }, 1000);
}