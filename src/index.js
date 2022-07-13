import './style.css';
import createList from './modules/create-list.js';
import addTaskEvent from './modules/add-task.js';
import getData from './modules/get-data.js';

getData().forEach((task) => createList(task));

addTaskEvent();