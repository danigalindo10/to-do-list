import Task from './task.js';
import createList from './create-list.js';
import getData from './get-data.js';

// Selectors
const addTask = () => {
  const input = document.getElementById('new-task');
  const alert = document.getElementById('alert');
  const toDoTasks = getData();
  if (input.value) {
    const task = new Task(input.value, toDoTasks.length + 1);
    createList(task);
    toDoTasks.push(task);
    // Local Storage
    localStorage.setItem('toDoData', JSON.stringify(toDoTasks));
    input.value = '';
  } else {
    alert.innerHTML = 'Empty field';
    alert.style.display = 'block';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 2500);
  }
};

export default addTask;
