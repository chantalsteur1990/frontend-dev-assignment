import React from 'react';
import './search.css';
import iconSearch from '../../assets/img/search.svg';
import iconClear from '../../assets/img/clear.svg';

const Search = (props) => {
  const {
    handleChange,
    handleClear,
    handleSubmit,
    handleKeyUp,
    value,
  } = props;

  const showButtonClear = value !== '';

  return (
    <div className="input-search">
      <div className="input-search__actions">
        { showButtonClear &&
          <button onClick={handleClear} aria-label="annuleren">
            <img
              alt="icon-clear"
              className="input-search__actions__icon"
              src={iconClear}></img>
          </button>
        }
        <button onClick={handleSubmit} aria-label="zoeken">
          <img
            alt="icon-search"
            className="input-search__actions__icon"
            src={iconSearch}></img>
        </button>
      </div>
      <input
        className="input-search__input"
        type="text"
        name="search"
        placeholder="Zoeken"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        aria-label="zoeken"
        value={value}
        autoComplete="off"/>
    </div>
  );
};

export default Search;