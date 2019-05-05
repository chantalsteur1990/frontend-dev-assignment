import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import SearchContainer from './search.container';

configure({ adapter: new Adapter() });

const mockProps = {
  handleSearch: jest.fn(),
  handleSuggestions: jest.fn(),
  handleQueryChange: jest.fn(),
  value: ''
};

describe('Search container', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SearchContainer {...mockProps} />);
  });

  it('should render (snapshot)', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should call the handleQueryChange callback on handleChange', () => {
    const mockEvent = {
      target: {
        value: 't'
      }
    }
    component.instance().handleChange(mockEvent);
    expect(mockProps.handleQueryChange).toHaveBeenCalledWith('t');
  });

  it('should call the handleQueryChange callback on handleClear', () => {
    component.instance().handleClear();
    expect(mockProps.handleQueryChange).toHaveBeenCalledWith('');
  });

  it ('should call the submit callback', () => {
    component.instance().handleSubmit();
    expect(mockProps.handleSearch).toHaveBeenCalled();
  });

  it('should call handleSuggestions callback on keyup event', () => {
    component.instance().handleKeyUp();
    expect(mockProps.handleSuggestions).toHaveBeenCalled();
  });
});
