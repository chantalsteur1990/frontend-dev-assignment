import React, { Component } from 'react';
import Search from './search'

export class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
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
    const { handleSuggestions } = this.props;

    this.setState({
      ...this.state,
      value: e.target.value
    })

    handleSuggestions(e.target.value);
  };

  /**
   * Clear input
   * 
   * @return {Void}
   */
  handleClear = () => {
    this.setState({
      ...this.state,
      value: ''
    })
  };

  /**
   * Handle submit
   * Call handleSearch callback;
   * 
   * @return {Void}
   */
  handleSubmit = () => {
    const { handleSearch } = this.props;
    handleSearch(this.state.value);
  }

  render() {
    const { value } = this.state;
    return (
      <Search
        handleChange={this.handleChange}
        handleClear={this.handleClear}
        handleSubmit={this.handleSubmit}
        value={value}
        {...this.props}/>
    )
  }
};

export default SearchContainer;