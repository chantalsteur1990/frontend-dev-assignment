const API_URL_SUGGESTIONS = 'http://localhost:3000/search\?q\=';

const getSuggestions = (query) => {
  return fetch(API_URL_SUGGESTIONS + query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export default {
  getSuggestions
};