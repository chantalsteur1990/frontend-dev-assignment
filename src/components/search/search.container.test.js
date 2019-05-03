import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import SearchContainer from './search.container';

configure({ adapter: new Adapter() });

const mockProps = {
  name: 'search',
  placeholder: 'Zoeken',
  ariaLabelInput: 'zoeken',
  ariaLabelClear: 'annuleren',
  ariaLabelSubmit: 'zoeken',
  handleSearch: jest.fn(),
  handleSuggestions: jest.fn()
};

describe('Search container', () => {
  it('should render (snapshot)', () => {
    const component = shallow(<SearchContainer {...mockProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  
  it ('should have mutated the state', () => {
    const component = shallow(<SearchContainer {...mockProps} />);

    expect(component.instance().state).toEqual({
      value: ''
    });

    let mockEvent = { target: { value: 't' }};
    component.instance().handleChange(mockEvent);
    expect(component.instance().state).toEqual({
      value: 't'
    });

    mockEvent.target.value = '';
    component.instance().handleChange(mockEvent);
    expect(component.instance().state).toEqual({
      value: ''
    });
  });

  it ('should clear the input', () => {
    const component = shallow(<SearchContainer {...mockProps} />);
    component.instance().state = {
      value: 'trui'
    };

    component.instance().handleClear();
    expect(component.instance().state).toEqual({
      value: ''
    });
  });

  it ('should call the submit callback with the current value', () => {
    const component = shallow(<SearchContainer {...mockProps} />);
    component.instance().state.value = 'trui';
    component.instance().handleSubmit();
    expect(mockProps.handleSearch).toHaveBeenCalledWith('trui');
  })
});
