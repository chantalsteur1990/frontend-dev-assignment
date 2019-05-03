import React, { Component } from 'react';
import SearchForm from './components/searchForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <SearchForm />
      </div>
    );
  }
}

export default App;
