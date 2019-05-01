import React, { Component } from 'react';
import SearchContainer from './components/search/search.container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <SearchContainer
            name="search"
            placeholder="Zoeken"
            handleSearch={() => {}}
            handleSuggestions={() => {}}
            ariaLabelInput="zoeken"
            ariaLabelClear="annuleren"
            ariaLabelSubmit="zoeken"/>
      </div>
    );
  }
}

export default App;
