import {
  SUGGESTIONS_RESPONSE,
  SUGGESTIONS_REQUEST,
  SEARCH_RESPONSE,
  SEARCH_REQUEST } from './actionTypes';

const API_URL_SUGGESTIONS = 'http://localhost:3000/search\?q\=trui';
const API_URL_SEARCH = 'http://localhost:3000/search\?q\=trui';

export const suggestionsResponse = (response) => {
  return {type: SUGGESTIONS_RESPONSE, payload: response};
}

export const suggestionsRequest = (query) => {
  return dispatch => {
    dispatch({ type: SUGGESTIONS_REQUEST });
    return fetch(API_URL_SUGGESTIONS + query, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
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
    return fetch(API_URL_SEARCH + query, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(json => dispatch(searchResponse(json)));
  };
}
