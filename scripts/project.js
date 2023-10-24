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
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  const sortingOption = document.getElementById('sorting-option');
  const filteringOption = document.getElementById('filtering-option');
  const sortValue = sortingOption.value;
  const filterValue = filteringOption.value;

  const filteredTasks = tasks.filter(task => {
    if (filterValue === 'completed') {
      return task.completed;
    } else if (filterValue === 'incomplete') {
      return !task.completed;
    }
    return true; // 'all' (show all tasks)
  });

  filteredTasks.sort((a, b) => {
    if (sortValue === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortValue === 'date') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortValue === 'completed') {
      return a.completed - b.completed;
    }
  });

  for (let i = 0; i < filteredTasks.length; i++) {
    const task = filteredTasks[i];

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      <span>${task.name}</span>
      <span class="date">${task.date}</span>
    `;

    const checkbox = taskItem.querySelector('input');
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      displayTasks();
    });

    taskList.appendChild(taskItem);
  }
}

const addButton = document.getElementById('add-task-button');
addButton.addEventListener('click', addTask);

const sortingOption = document.getElementById('sorting-option');
sortingOption.addEventListener('change', displayTasks);

const filteringOption = document.getElementById('filtering-option');
filteringOption.addEventListener('change', displayTasks);

// Display tasks initially
displayTasks();
