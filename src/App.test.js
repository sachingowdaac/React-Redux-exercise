import { render, shallow } from '@testing-library/react';
import ReactDOM from 'react-dom';
import app from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<app></app>, div);

  // expect(app('h2')).toBe('Count');
  // expect(div.querySelector('h2')).toBe('Count');
  // expect(root.querySelector('button').textContent).toBe('+');
});
test('render button correctly', () => {
  const { getByTagName } = render(<h2></h2>);
  expect(getByTagName('h2')).toHaveTextContent('Count');
});
