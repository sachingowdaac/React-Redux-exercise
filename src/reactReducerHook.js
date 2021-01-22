import { useReducer, useState } from 'react';
import UseMemoHook from './ReactUseMemo';
import UseRefHook from './ReactUseRef';
import Todos from './todoUsingReactReduser';

export const ACTIONS = {
  ADD_TODO: 'add todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};
const newTodo = (name) => {
  return { id: Date.now(), name: name, completed: false };
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };
  console.log(todos);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Add todo"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </form>
        {name}
        <Todos todos={todos} dispatch={dispatch} />
      </div>
      <div>
        <UseMemoHook />
      </div>
      <div>
        <UseRefHook />
      </div>
    </div>
  );
};
export default App;
