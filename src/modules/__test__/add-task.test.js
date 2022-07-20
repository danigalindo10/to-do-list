/**
* @jest-environment jsdom
*/
import getData from '../get-data.js';

import addTask from '../add-task.js';

// Mocking get-data.js DOM
jest.mock('../get-data.js');

describe('Add task function', () => {
  test('testing localstorage', () => {
    const data = [{ description: 'clean my room', completed: false, index: 1 }];
    expect(getData()).toEqual(data);
  });
  // Mock members are useful in tests to assert how these functions get called
  // Vamos a imitar partes que incertaremos en mi html a partir de la linea 27
  test('Add task when input value is defined', () => {
    document.body.innerHTML = '<div>'
      + '  <input type="text" name="new-task" id="new-task" placeholder="Add task to your list" value="text">'
      + '</div>'
      + '  <ul id="task-list"></ul>';
    addTask();

    const list = document.querySelectorAll('#task-list li');
    expect(list).toHaveLength(1);

    const input = document.querySelector('input');
    expect(input).toHaveProperty('value', '');
  });

  test('Add task when input value is defined', () => {
    document.body.innerHTML = '<div id="alert"></div>'
    + '<div>'
    + '  <input type="text" name="new-task" id="new-task" placeholder="Add task to your list" value="">'
    + '</div>'
    + '  <ul id="task-list"></ul>';
    addTask();
    // Sacamos estos datos de la linea 18 de add-task.js
    const alert = document.querySelector('#alert');
    expect(alert).toHaveProperty('innerHTML', 'Empty field!');
  });
});