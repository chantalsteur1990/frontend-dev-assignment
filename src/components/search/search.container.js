import React, { Component } from 'react';
import Search from './search'

export class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
      showButtonClear: false
    }
  }

  /**
   * Set clear button visible or not
   * Call handleSuggestions callback
   * 
   * @param {Event} e
   * 
   * @return {Void}
   */
  handleChange = (e) => {
    const { handleSuggestions } = this.props;
    let showButtonClear;

    if (e.target.value !== '') {
      showButtonClear = true;
    } else {
      showButtonClear = false;
    }

    this.setState({
      ...this.state,
      value: e.target.value,
      showButtonClear
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
      showButtonClear: false,
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
    const { showButtonClear, value } = this.state;
    return (
      <Search
        handleChange={this.handleChange}
        handleClear={this.handleClear}
        handleSubmit={this.handleSubmit}
        showButtonClear={showButtonClear}
        value={value}
        {...this.props}/>
    )
  }
};

export default SearchContainer;