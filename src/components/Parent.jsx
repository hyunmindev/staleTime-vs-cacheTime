import { useQuery } from 'react-query';

import Child from './Child';

import { fetchTodos } from '../services';

function Parent() {
  const { data } = useQuery(['todo'], fetchTodos);

  return data.length > 0 && <Child />;
}

export default Parent;
