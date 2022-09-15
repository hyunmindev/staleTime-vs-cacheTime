import { useQuery } from 'react-query';

import { fetchTodos } from '../services';

function Child() {
  const { data } = useQuery(['todo'], fetchTodos);

  return (
    <ul>
      {data.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
}

export default Child;
