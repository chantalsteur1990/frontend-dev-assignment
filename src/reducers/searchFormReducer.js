import {
  SUGGESTIONS_REQUEST,
  SUGGESTIONS_RESPONSE
} from '../actions/actionTypes';

const initialState = {
  suggestions: [],
  loading: false,
};

const SearchForm = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SUGGESTIONS_REQUEST:
      newState = {
        ...state,
        loading: true
      };
      return newState;
    case SUGGESTIONS_RESPONSE:
      newState = {
        ...state,
        loading: false,
        suggestions: action.payload.suggestions
      };
      return newState;
    default:
      return state;
  }
};

export default SearchForm;