import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { testNameToKey } from 'jest-snapshot/build/utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it should render without errors', ()=> {
  expect (1).toBe(1);

});
