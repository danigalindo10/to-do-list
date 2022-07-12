import './style.css';

const tasksList = document.getElementById('to-do-list');
// Elements created to display them using javascript
const listTitleDiv = document.createElement('div');
const listTitle = document.createElement('INPUT');
const listRefresh = document.createElement('button');
const addTaskDiv = document.createElement('div');
const addTask = document.createElement('INPUT');
const enterTask = document.createElement('button');
const clearButton = document.createElement('button');

listTitle.setAttribute('type', 'text');
addTask.setAttribute('type', 'text');
listTitle.value = 'Today\'s To Do';
addTask.setAttribute('placeholder', 'Add to your list...');
tasksList.append(listTitleDiv, addTaskDiv);
listTitleDiv.append(listTitle, listRefresh);
addTaskDiv.append(addTask, enterTask);
clearButton.innerHTML = 'Clear all completed';
clearButton.setAttribute('id', 'clearButton');

// set an array of some simple to do tasks (array of objects)
const listItems = [
  {
    description: 'Wash the dishes',
    isCompleted: true,
    index: 0,
  },
  {
    description: 'Finish To Do List project',
    isCompleted: false,
    index: 3,
  },
  {
    description: 'Go to the market',
    isCompleted: false,
    index: 2,
  },
  {
    description: 'Trow away the trash',
    isCompleted: false,
    index: 1,
  },
];

// Write a function to iterate over the tasks array and populate an HTML
const getTaskIndex = (index) => {
  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].index === index) {
      return listItems[i];
    }
  }
  return null;
};

const populateTasks = () => {
  for (let i = 0; i < listItems.length; i += 1) {
    const currentTask = getTaskIndex(i);
    const newLi = document.createElement('li');
    const checkbox = document.createElement('INPUT');
    const taskName = document.createElement('INPUT');
    const taskButton = document.createElement('button');
    checkbox.setAttribute('type', 'checkbox');
    taskName.setAttribute('type', 'text');
    tasksList.append(newLi);
    newLi.append(checkbox, taskName, taskButton);
    taskName.value = currentTask.description;
    checkbox.checked = currentTask.isCompleted;
  }
};
populateTasks();
tasksList.append(clearButton);