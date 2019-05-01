import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';

const mockProps = {
  handleChange: () => {},
  name: 'search',
  placeholder: 'Zoeken',
  ariaLabel: 'zoeken'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search {...mockProps} />, div);
});
