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
  handleSuggestions: jest.fn(),
  handleQueryChange: jest.fn(),
  value: ''
};

describe('Search container', () => {
  it('should render (snapshot)', () => {
    const component = shallow(<SearchContainer {...mockProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it ('should call the submit callback', () => {
    const component = shallow(<SearchContainer {...mockProps} />);
    component.instance().handleSubmit();
    expect(mockProps.handleSearch).toHaveBeenCalled();
  })
});
