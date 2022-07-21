/**
 * @jest-environment jsdom
 */

import editTask from '../edit-task.js';
import getData from '../get-data.js';

jest.mock('../get-data.js');

describe('Edit items from list', () => {
  test('Edit items on the list', () => {
    global.localStorage.setItem('toDoData', '[{"description":"clean the bathroom","completed":false,"index":1}]');
    editTask('task1', 'go for walk', false);
    const storageData = getData();
    expect(storageData[0].description).toBe('go for walk');
  });
});