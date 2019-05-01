import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Search from './search';

const mockProps = {
  name: 'search',
  placeholder: 'Zoeken',
  ariaLabelInput: 'zoeken',
  ariaLabelClear: 'annuleren',
  ariaLabelSubmit: 'zoeken',
  handleChange: jest.fn(),
  handleClear: jest.fn(),
  handleSubmit: jest.fn(),
  showButtonClear: true
};

it('should render (snapshot)', () => {
  const component = shallow(<Search {...mockProps} />);
  expect(shallowToJson(component)).toMatchSnapshot();
});
