import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import Child from './Child';

import { fetchTodos, fetchTodosWithDelay } from '../services';

function Parent() {
  const queryClient = useQueryClient();
  const [isShow, setIsShow] = useState(false);

  const { data, refetch } = useQuery(['todo'], () => {
    console.log('(parent) fetching start');
    return fetchTodos();
  }, {
    // staleTime: 100,
    onSuccess: () => {
      console.log('(parent) fetching success');
    },
  });

  useEffect(() => {
    if (data) {
      console.log('data exist');
    }
  }, [data]);

  return (
    <>
      <button
        type="button"
        onClick={() => { setIsShow(!isShow); }}
      >
        show
      </button>
      <button
        type="button"
        onClick={() => refetch()}
      >
        refetch
      </button>
      <button
        type="button"
        onClick={() => queryClient.invalidateQueries()}
      >
        invalidate
      </button>
      {isShow && <Child />}
    </>
  );
}

export default Parent;
