import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Search from './search';

configure({ adapter: new Adapter() });

const mockProps = {
  name: 'search',
  placeholder: 'Zoeken',
  ariaLabelInput: 'zoeken',
  ariaLabelClear: 'annuleren',
  ariaLabelSubmit: 'zoeken',
  handleChange: jest.fn(),
  handleClear: jest.fn(),
  handleSubmit: jest.fn(),
  handleKeyUp: jest.fn(),
  value: ''
};

describe('Search', () => {
  it('should render (snapshot)', () => {
    const component = shallow(<Search {...mockProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  
  it('should show the clear button', () => {
    const props = {
      ...mockProps,
      value: 'trui'
    };
    const component = shallow(<Search {...props} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});

