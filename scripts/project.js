let tasks = [];

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
  const value = filteringOption.value;

  if (value === 'name') {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (value === 'date') {
    tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (value === 'completed') {
    tasks.sort((a, b) => a.completed - b.completed);
  }

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(i, 1);
      displayTasks();
    });
    taskItem.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newName = prompt('Edit task name:', task.name);
      if (newName !== null) {
        task.name = newName;
        task.date = new Date().toLocaleDateString();
        displayTasks();
      }
    });
    taskItem.appendChild(editButton);

    taskList.appendChild(taskItem);
  }
}

const addButton = document.getElementById('add-task-button');
addButton.addEventListener('click', addTask);

displayTasks();