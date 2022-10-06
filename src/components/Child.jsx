import { useQuery } from 'react-query';

import { fetchTodos, fetchTodosWithDelay } from '../services';

function Child() {
  const { data } = useQuery(['todo'], () => {
    console.log('(parent) fetching start');
    return fetchTodos();
  }, {
    // staleTime: 100,
  });
  console.log(data);
  console.log('(child) rerender');

  return (
    <ul>
      {(data ?? []).map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
}

export default Child;
