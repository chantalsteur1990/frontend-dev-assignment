import React, { Component } from 'react';
import Search from './search';

export class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.state = {
      value: props.value
    }
  }

  /**
   * Update value in state and
   * call handleSuggestions callback
   * 
   * @param {Event} e
   * 
   * @return {Void}
   */
  handleChange = (e) => {
    const { handleQueryChange } = this.props;
    handleQueryChange(e.target.value);
  };

  /**
   * Clear input
   * 
   * @return {Void}
   */
  handleClear = () => {
    const { handleQueryChange } = this.props;
    handleQueryChange('');
  };

  /**
   * Handle submit
   * Call handleSearch callback;
   * 
   * @return {Void}
   */
  handleSubmit = () => {
    const { handleSearch } = this.props;
    handleSearch();
  }

  /**
   * Handle suggestions on key up
   * 
   * @return {Void}
   */
  handleKeyUp = () => {
    const { handleSuggestions } = this.props;
    handleSuggestions();
  }

  render() {
    const { value } = this.state;
    return (
      <Search
        handleChange={this.handleChange}
        handleClear={this.handleClear}
        handleSubmit={this.handleSubmit}
        handleKeyUp={this.handleKeyUp}
        value={value}
        {...this.props}/>
    )
  }
};

export default SearchContainer;