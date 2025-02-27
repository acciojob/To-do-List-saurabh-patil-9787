//your code here
let input = document.getElementById('newTodoInput')
let taskBtn = document.getElementById('addTodoBtn');
let olTodoContainer = document.getElementById('todoList');

taskBtn.addEventListener('click',addToTask)

function addToTask(){
    let taskValue = input.value
    let list = document.createElement('li')
    list.innerText = taskValue
    console.log(taskValue)
    olTodoContainer.append(list)
    input.value = "";


}
