import { QueryClientProvider, QueryClient } from 'react-query';

import Parent from './components/Parent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 3000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Parent />
    </QueryClientProvider>
  );
}

export default App;
