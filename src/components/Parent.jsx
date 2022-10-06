import { useEffect, useRef, useState } from 'react';

import Child from './Child';

import useDetectFetch from '../hooks/useDetectFetch';

function Parent() {
  const clockRef = useRef(null);
  const stopWatchRef = useRef(new Date());
  const timerRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (!isShow) {
      stopWatchRef.current = new Date();
      timerRef.current = setInterval(() => {
        clockRef.current.innerText = new Date() - stopWatchRef.current;
      }, 100);
    } else {
      // eslint-disable-next-line no-unused-expressions
      timerRef.current && clearInterval(timerRef.current);
    }
  }, [isShow]);

  const isFetching = useDetectFetch([isShow]);

  return (
    <>
      <button
        type="button"
        onClick={() => { setIsShow(!isShow); }}
      >
        show
      </button>
      <h1 ref={clockRef}>0.0s</h1>
      {isFetching && <h2>요청 발생</h2>}
      {isShow && <Child />}
    </>
  );
}

export default Parent;
