//your code here
let input = document.getElementById('newTodoInput')
let taskBtn = document.getElementById('addTodoBtn');
let olTodoContainer = document.getElementById('todoList');

taskBtn.addEventListener('click',addToTask)

function addToTask(){
    let taskValue = input.value
    let li = document.createElement('li')
    list.innerText = taskValue
    console.log(taskValue)
    olTodoContainer.append(li)
    input.value = "";


}
