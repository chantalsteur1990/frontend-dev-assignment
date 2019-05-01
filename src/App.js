import React, { Component } from 'react';
import Search from './components/search/search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Search name="search" placeholder="Zoeken" handleChange={() => {}} ariaLabel="zoeken" />
      </div>
    );
  }
}

export default App;
