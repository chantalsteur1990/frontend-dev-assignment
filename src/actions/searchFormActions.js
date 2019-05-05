import {
  SUGGESTIONS_RESPONSE,
  SUGGESTIONS_REQUEST,
  SEARCH_RESPONSE,
  SEARCH_REQUEST } from './actionTypes';
import SuggestionsService from '../services/suggestions.service';

export const suggestionsResponse = (response) => {
  return {type: SUGGESTIONS_RESPONSE, payload: response};
}

export const suggestionsRequest = (query) => {
  return dispatch => {
    dispatch({ type: SUGGESTIONS_REQUEST });
    return SuggestionsService.getSuggestions(query)
    .then(response => response.json())
    .then(json => dispatch(suggestionsResponse(json)));
  };
}

export const searchResponse = (response) => {
  return {type: SEARCH_RESPONSE, payload: response};
}

export const searchRequest = (query) => {
  return dispatch => {
    dispatch({ type: SEARCH_REQUEST });

    console.log('Search for ' + query)
    dispatch(searchResponse({}));
  };
}
