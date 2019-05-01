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
  
  // it ('should have mutated the state', () => {
  //     const searchContainer = new SearchContainer(mockProps);
  //     const mockEvent = {
  //       target: {
  //         value: 't'
  //       }
  //     };
  //     searchContainer.handleChange(mockEvent);
  //     expect(searchContainer.state).toEqual({});
  // })
});
