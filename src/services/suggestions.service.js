const API_URL_SUGGESTIONS = 'http://localhost:3000/search?q=';

const getSuggestions = async (query) => {
  const response = await fetch(API_URL_SUGGESTIONS + query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return response.json();
}

export default {
  getSuggestions
};