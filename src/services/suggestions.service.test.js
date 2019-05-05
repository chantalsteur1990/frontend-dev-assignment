import service from './suggestions.service';

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
};

describe('Services: Suggestions', () => {
  fetch = mockFetch({
    suggestions: []
  });

  it('should call fetch with the api url and given query', async () => {
      const response = await service.getSuggestions('tru');
      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:3000/search?q=tru",
        {
          "headers": {
            "Content-Type": "application/json"
          },
          "method": "GET"
        }
      );
      expect(response).toEqual({
        suggestions: []
      });
  });
});