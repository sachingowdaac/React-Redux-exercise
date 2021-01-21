import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './action';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Count {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <pre>user logged in</pre> : <pre>user logged out</pre>}
    </div>
  );
}

export default App;
