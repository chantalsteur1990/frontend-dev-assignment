import React from 'react';
import './search.css';
import iconSearch from '../../assets/img/search.svg';
import iconClear from '../../assets/img/clear.svg';

const Search = (props) => {
  const {
    name,
    placeholder,
    handleChange,
    handleClear,
    handleSubmit,
    ariaLabelInput,
    ariaLabelClear,
    ariaLabelSubmit,
    showButtonClear,
    value,
  } = props;

  return (
    <div className="input-search">
      <div className="input-search__actions">
        { showButtonClear &&
          <button onClick={handleClear} aria-label={ariaLabelClear}>
            <img
              alt="icon-clear"
              className="input-search__actions__icon"
              src={iconClear}></img>
          </button>
        }
        <button onClick={handleSubmit} aria-label={ariaLabelSubmit}>
          <img
            alt="icon-search"
            className="input-search__actions__icon"
            src={iconSearch}></img>
        </button>
      </div>
      <input
        className="input-search__input"
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleChange} 
        aria-label={ariaLabelInput}
        value={value}/>
    </div>
  );
};

export default Search;