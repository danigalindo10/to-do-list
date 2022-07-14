// Functions
// Get the Data from the Local Storage
const getData = () => {
  const data = localStorage.getItem('toDoData');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export default getData;