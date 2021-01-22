import { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
  const [data, setData] = useState('');
  const focuss = useRef();
  const prevData = useRef();

  const handleFocus = () => {
    focuss.current.focus();
  };

  useEffect(() => {
    prevData.current = data;
  }, [data]);
  return (
    <div>
      <input ref={focuss} onChange={(e) => setData(e.target.value)} />
      <div>{data}</div>
      <button onClick={handleFocus}>Focus</button>
      <div>{prevData.current}</div>
    </div>
  );
};
export default UseRefHook;
