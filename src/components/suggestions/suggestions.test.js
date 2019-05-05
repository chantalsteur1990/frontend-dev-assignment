import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Suggestions from './suggestions';

configure({ adapter: new Adapter() });

const mockProps = {
  suggestions: [{
    searchterm: 'mooie trui',
    nrResults: 1203
  }],
  query: 'tr',
  handleSelect: jest.fn()
};

describe('Suggestions', () => {
  let component;
  
  beforeEach(() => {
    component = shallow(<Suggestions {...mockProps} />);
  });

  it('should render (snapshot)', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should call handleSelect callback', () => {
    component.find('.suggestions__suggestion').simulate('click', {target: { id: 'trui' } });
    expect(mockProps.handleSelect).toHaveBeenCalledWith('trui');
  })
});
