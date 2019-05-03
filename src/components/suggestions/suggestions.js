import React from 'react';
import './suggestions.css';

const Suggestions = (props) => {
  const {
    suggestions,
    query
  } = props;

  const boldify = (string) => {
    return `<b>${string}</b>`;
  }

  const suggestionsStrings = suggestions.map(s => {
    const searchterm = `${s.searchterm}`;
    const indexOfQuery = searchterm.indexOf(query);
    if(indexOfQuery === -1) return searchterm;

    let beforeQuery = searchterm.substr(0, indexOfQuery);
    let afterQuery = searchterm.substr(indexOfQuery+query.length, searchterm.length);
    return `${boldify(beforeQuery)}${query}${boldify(afterQuery)} (${s.nrResults})`;
  });

  console.log(suggestionsStrings);

  return (
    <div className="suggestions">
      { suggestionsStrings.map(s => {
        return (
          <div
            className="suggestions__suggestion"
            dangerouslySetInnerHTML={{ __html: s }}>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;