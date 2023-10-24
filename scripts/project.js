// Import other modules if needed
import { fetchData } from './data.js';

const tasks = [];

function addTask() {
  const taskName = prompt('Enter a task:');
  if (taskName) {
    const task = {
      name: taskName,
      date: new Date().toLocaleDateString(),
      completed: false,
    };
    tasks.push(task);
    displayTasks();
  }
}

function displayTasks() {
  // Existing displayTasks() code
  // ...

  // Sorting and filtering logic remains the same
  // ...

  // To ensure the data is always up to date, you can fetch data before displaying tasks
  fetchData()
    .then((data) => {
      tasks = data;
      displayTasks();
    })
    .catch((error) => console.error('Error fetching data:', error));
}

// Add an event listener to the "Add Task" button
const addButton = document.getElementById('add-task-button');
addButton.addEventListener('click', addTask);

// Display tasks initially
displayTasks();