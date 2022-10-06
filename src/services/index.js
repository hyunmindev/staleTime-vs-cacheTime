const url = 'https://jsonplaceholder.typicode.com';

export const fetchTodosWithDelay = (ms = 1000) => new Promise((resolve) => {
  setTimeout(async () => {
    const response = await fetch(`${url}/todos`);
    const data = response.json();
    resolve(data);
  }, ms);
});

export const fetchTodos = async () => {
  const response = await fetch(`${url}/todos`);
  return response.json();
};
