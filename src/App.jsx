import { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import Parent from './components/Parent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // suspense: true,
      // staleTime: 100000,
      cacheTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Suspense fallback={<h1>loading..</h1>}> */}
      <Parent />
      {/* </Suspense> */}
    </QueryClientProvider>
  );
}

export default App;
