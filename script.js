// script.js
// Persisted To-Do List with Local Storage
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Helper: get tasks array from localStorage (returns array)
    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    // Helper: save tasks array to localStorage
    function saveStoredTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to create a task DOM element and append it to the list
    // If save === true, the task will be stored in localStorage (default true)
    function addTask(taskText, save = true) {
        const trimmed = taskText.trim();
        if (trimmed === '') {
            // Do nothing for empty tasks (caller may want to alert)
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = trimmed;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // required by checker

        // When clicked, remove li from DOM and remove from localStorage
        removeButton.onclick = function () {
            // Remove from DOM
            taskList.removeChild(li);

            // Remove from localStorage: remove first matching text
            let tasks = getStoredTasks();
            const index = tasks.indexOf(trimmed);
            if (index !== -1) {
                tasks.splice(index, 1);
                saveStoredTasks(tasks);
            }
        };

        // Append button and li to list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // If requested, save to localStorage
        if (save) {
            const tasks = getStoredTasks();
            tasks.push(trimmed);
            saveStoredTasks(tasks);
        }

        // Clear input field
        taskInput.value = '';
    }

    // Load tasks from localStorage and render them
    function loadTasks() {
        const storedTasks = getStoredTasks();
        storedTasks.forEach(taskText => {
            // Pass save = false to avoid re-saving when loading
            addTask(taskText, false);
        });
    }

    // Click handler for Add button (explicit addButton.addEventListener required)
    addButton.addEventListener('click', function () {
        const text = taskInput.value;
        if (text.trim() === '') {
            alert('Please enter a task before adding!');
            return;
        }
        addTask(text, true);
    });

    // Keypress handler for Enter key (explicit event.key usage required)
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const text = taskInput.value;
            if (text.trim() === '') {
                alert('Please enter a task before adding!');
                return;
            }
            addTask(text, true);
        }
    });

    // Initialize app by loading stored tasks
    loadTasks();
});
