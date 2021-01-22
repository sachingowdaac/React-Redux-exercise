import { ACTIONS } from './reactReducerHook';
const Todos = ({ todos, dispatch }) => {
  return (
    <div>
      {todos &&
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span style={{ color: todo.completed ? 'green' : 'red' }}>
                {todo.name}
              </span>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: { id: todo.id },
                  })
                }
              >
                Toggle
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.DELETE_TODO,
                    payload: { id: todo.id },
                  })
                }
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default Todos;
