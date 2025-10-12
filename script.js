// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Select the main elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === "") {
            alert("Please enter a task before adding!");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create and style the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // ✅ classList.add included

        // Add click event to remove the task
        removeButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });
function addTask() {
    // Get and trim input value
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task before adding!");
        return;
    }

    // ✅ Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // ✅ Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn'); // adds the correct styling

    // ✅ Assign an onclick event to remove the task
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    // ✅ Append the remove button to the li element
    li.appendChild(removeButton);

    // ✅ Append the li element to the task list
    taskList.appendChild(li);

    // ✅ Clear the input field
    taskInput.value = "";
}
