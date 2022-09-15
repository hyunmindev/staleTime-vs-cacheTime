const url = 'https://jsonplaceholder.typicode.com';

export const fetchTodos = () => new Promise((resolve) => {
  setTimeout(async () => {
    const response = await fetch(`${url}/todos`);
    const data = response.json();
    resolve(data);
  }, 1000);
});
