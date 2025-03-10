//your code here
let input = document.getElementById('newTodoInput')
let taskBtn = document.getElementById('addTodoBtn');
let olTodoContainer = document.getElementById('todoList');

taskBtn.addEventListener('click',addToTask)

function addToTask(){
    let taskValue = input.value
    let li = document.createElement('li')
	
    li.innerText = taskValue
    if(taskValue !=="" ){
    olTodoContainer.append(li)}
    input.value = "";
	


}
