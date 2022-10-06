import { useRef, useEffect, useState } from 'react';

export default function useDetectFetch(resetDeps = []) {
  const count = useRef(-1);
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(false);
  }, [...resetDeps]);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const entry of list.getEntries()) {
        if (entry.initiatorType === 'fetch') {
          count.current += 1;
          if (count.current > 0) {
            setState(true);
            count.current = 0;
          }
        }
      }
    });

    observer.observe({
      entryTypes: ['resource'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return state;
}
