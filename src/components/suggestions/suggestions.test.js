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
  it('should render (snapshot)', () => {
    const component = shallow(<Suggestions {...mockProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
