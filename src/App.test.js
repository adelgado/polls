import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // This is commented-out because it currently needs internet.
  // If we inject the fetch module with dependency injection,
  // we could get rid of that.
  // ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
