import reducer from './searchFormReducer';
import { SUGGESTIONS_REQUEST, SUGGESTIONS_RESPONSE } from '../actions/actionTypes';

describe('Reducers: SearchForm', () => {

  it('should set the loading state when the request is loading', () => {
    const newState = reducer(undefined, { type: SUGGESTIONS_REQUEST, payload: 'trui'});
    expect(newState.loading).toEqual(true);
  });

  it('should set the loading state to false and add suggestions to state', () => {
    const newState = reducer(undefined, {
      type: SUGGESTIONS_RESPONSE,
      payload: {
        suggestions: []
      }
    });
    expect(newState.loading).toEqual(false);
    expect(newState.suggestions).toEqual([]);
  });
});
