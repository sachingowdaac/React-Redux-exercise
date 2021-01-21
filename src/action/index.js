export const increment = (step) => {
  return {
    type: 'INCREMENT',
    payload: {
      steps: step,
    },
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
