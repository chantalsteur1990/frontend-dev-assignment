import React from 'react';
import './suggestions.css';

const Suggestions = (props) => {
  const {
    suggestions,
    query,
    handleSelect
  } = props;

  /**
   * Wrap value in bold tags
   * 
   * @param {String} string
   * 
   * @return {String}
   */
  const boldify = (value) => {
    return `<span class="bold">${value}</span>`;
  }

  /**
   * Call handleSelect callback with
   * the selected value
   * 
   * @param {Event} e 
   * 
   * @return {Void}
   */
  const handleClick = (e) => {
    handleSelect(e.target.id);
  }

  const suggestionsWithLabel = suggestions.map(suggestion => {
    const { searchterm, nrResults } = suggestion;
    const indexOfQuery = searchterm.indexOf(query);
    if(indexOfQuery === -1) {
      return {
        ...suggestion,
        displayLabel: `${searchterm} (${nrResults})`
      }
    };

    let beforeQuery = searchterm.substr(0, indexOfQuery);
    let afterQuery = searchterm.substr(indexOfQuery+query.length, searchterm.length);

    return {
      ...suggestion,
      displayLabel: `${boldify(beforeQuery)}${query}${boldify(afterQuery)} (${nrResults})`
    };
  });

  return (
    <div className="suggestions">
      { suggestionsWithLabel.map(suggestion => {
        const { displayLabel, searchterm } = suggestion;
        return (
          <div
            className="suggestions__suggestion"
            dangerouslySetInnerHTML={{ __html: displayLabel }}
            id={searchterm}
            onClick={handleClick}
            key={searchterm}>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;