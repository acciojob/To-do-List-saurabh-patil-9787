let input = document.getElementById('newTodoInput');
let taskBtn = document.getElementById('addTodoBtn');
let olTodoContainer = document.getElementById('todoList');

taskBtn.addEventListener('click', addToTask);

function addToTask() {
    let taskValue = input.value.trim();  // Trim spaces around the input

    // Validate if task is not empty
    if (taskValue === "") {
        alert("Please enter a valid todo item.");
        return; // Don't proceed if the input is empty
    }

    // Create a new <li> element and add the task
    let li = document.createElement('li');
    li.innerText = taskValue;

    // Add click event to each <li> to clear the input
    li.addEventListener('click', function() {
        input.value = ""; // Clear the input field on click
        input.focus();    // Focus the input again after clearing it
    });

    // Append the <li> to the ordered list
    olTodoContainer.append(li);

    // Clear input after adding the todo
    input.value = "";
    input.focus(); // Focus the input again for the next task
}
