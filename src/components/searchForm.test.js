import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { SearchForm } from './searchForm';

configure({ adapter: new Adapter() });

describe('SearchForm', () => {
  it('should render (snapshot)', () => {
    const component = shallow(<SearchForm />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render with suggestions (snapshot)', () => {
    const propsFromState = {
      suggestions: [{
        searchterm: 'trui',
        nrResults: 123
      }]
    };
    const component = shallow(<SearchForm {...propsFromState} />);
    component.instance().handleQueryChange('tr');
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  
  it('should only dispatch suggestionsRequest action when query lenght is > 1', () => {
    const propsFromState = {
      actions: {
        suggestionsRequest: jest.fn()
      }
    };
    const component = shallow(<SearchForm {...propsFromState} />);
    component.instance().handleSuggestions();
    expect(propsFromState.actions.suggestionsRequest).not.toHaveBeenCalled();
    component.instance().handleQueryChange('tr');
    component.instance().handleSuggestions();
    expect(propsFromState.actions.suggestionsRequest).toHaveBeenCalled();
  });

  it('should dispatch searchRequest action', () => {
    const propsFromState = {
      actions: {
        searchRequest: jest.fn()
      }
    };
    const component = shallow(<SearchForm {...propsFromState} />);
    component.instance().handleSearch();
    expect(propsFromState.actions.searchRequest).toHaveBeenCalled();
  });

  it('should have mutated the query in the state', () => {
    const component = shallow(<SearchForm />);
    expect(component.instance().state.query).toEqual('');
    component.instance().handleQueryChange('tr');
    expect(component.instance().state.query).toEqual('tr');
  });
});
