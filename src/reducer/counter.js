const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload.steps;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
export default CounterReducer;
