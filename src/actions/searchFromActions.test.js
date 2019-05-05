import * as actions from './searchFormActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'

import SuggestionsService from '../services/suggestions.service';
import {
  SUGGESTIONS_REQUEST,
  SUGGESTIONS_RESPONSE,
  SEARCH_REQUEST,
  SEARCH_RESPONSE
} from './actionTypes';
jest.mock('../services/suggestions.service');

SuggestionsService.getSuggestions.mockImplementation(() => Promise.resolve({
  suggestions: []
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions: SearchForm', () => {

  describe('Suggestions', () => {
    it('should have called the right actions', () => {
      const initialState ={
        loading: false,
        suggestions: []
      };
      const store = mockStore({ searchForm: {
        initialState
      }});

      const expectedActions = [{
        type: SUGGESTIONS_REQUEST
      }, {
        type: SUGGESTIONS_RESPONSE,
        payload: {
          suggestions: []
        }
      }]
  
      return store.dispatch(actions.suggestionsRequest()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });
  });

  describe('Search', () => {
    it('should have called the right actions', () => {
      const initialState ={
        loading: false,
        suggestions: []
      };
      const store = mockStore({ searchForm: {
        initialState
      }});

      const expectedActions = [{
        type: SEARCH_REQUEST
      }, {
        type: SEARCH_RESPONSE,
        payload: {}
      }]
  
      store.dispatch(actions.searchRequest());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});