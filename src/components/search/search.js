import React from 'react';
import './search.css';
import icon from '../../assets/img/icons8-search.svg';

const Search = ({ name, placeholder, handleChange, ariaLabel }) =>
<div className="input-search">
  <img alt="icon-search" className="input-search__icon " src={icon}></img>
  <input
    className="input-search__input"
    type="search"
    name={name}
    placeholder={placeholder}
    onKeyUp={handleChange} 
    aria-label={ariaLabel}/>
</div>;

export default Search;