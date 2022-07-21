import clearListHelper from './clear-list-helper.js';

const clearList = () => {
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', () => {
    clearListHelper();
  });
};

export default clearList;