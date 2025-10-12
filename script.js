// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // get and trim input

        // Check if task input is empty
        if (taskText === "") {
            alert("Please enter a task before adding!");
            return;
        }

        // Create new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Assign onclick event to remove the li when clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li and li to the list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // ✅ Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // ✅ Event listener for pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
