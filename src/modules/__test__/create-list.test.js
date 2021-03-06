/**
 * @jest-environment jsdom
 */

import createLi from '../create-list.js';

describe('Create LI function', () => {
  test('Should add a li element to the DOM', () => {
    const task = {
      description: 'go for walk',
      completed: false,
      index: 1,
    };
    document.body.innerHTML = '<div> <ul id="task-list"></ul> </div>';
    createLi(task);
    const list = document.querySelectorAll('#task-list li');
    expect(list).toHaveLength(1);
  });
});
