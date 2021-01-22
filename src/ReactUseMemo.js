import { useState, useMemo, useEffect, useCallback } from 'react';

const UseMemoHook = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const dubble = useMemo(() => {
    return DoubbleNumber(number);
  }, [number]);

  //   const styleTheme = useCallback(() => {
  // this return the whole function
  //     return {
  //       backgroundColor: dark ? 'black' : 'gray',
  //       color: dark ? 'white' : 'black',
  //     };
  //   }, [dark]);

  const styleTheme = useMemo(() => {
    //this only return values
    return {
      backgroundColor: dark ? 'black' : 'gray',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  useEffect(() => {
    console.log('theme chaged');
  }, [styleTheme]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={() => setDark((prev) => !prev)}>Toggle</button>
      <br />
      <h2 style={styleTheme}>{dubble}</h2>
    </div>
  );
};
export default UseMemoHook;
const DoubbleNumber = (num) => {
  for (let i = 0; i < 10000000; i++) {}
  return num * 2;
};
