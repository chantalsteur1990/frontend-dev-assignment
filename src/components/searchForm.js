import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchContainer from './search/search.container'
import Suggestions from './suggestions/suggestions';
import * as searchFormActions from '../actions/searchFormActions';

export class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleSuggestions = this.handleSuggestions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);

    this.state = {
      query: '',
      loading: false
    }
  }

  /**
   * Dispatch suggestionsRequest with
   * given query
   * 
   * @return {Void}
   */
  handleSuggestions = () => {
    const { actions: { suggestionsRequest } } = this.props;

    if (this.state.query.length > 1) {
      suggestionsRequest(this.state.query);
    }
  };

  /**
   * Dispatch searchRequest action
   * with value from local state
   * 
   * @return {Void}
   */
  handleSearch = () => {
    const { actions: { searchRequest } } = this.props;
    searchRequest(this.state.query);
  }

  /**
   * Set query in local state
   * 
   * @param {String} query
   * 
   * @return {Void}
   */
  handleQueryChange = (query) => {
    this.setState({
      ...this.state,
      query
    });
  }

  render() {
    const { query } = this.state;
    const { suggestions } = this.props;
    const showSuggestions = query.length > 1;
    return (
      <div>
        <SearchContainer
          handleSuggestions={this.handleSuggestions}
          handleSearch={this.handleSearch}
          handleQueryChange={this.handleQueryChange}
          value={query} />

          { showSuggestions &&
            <Suggestions
              suggestions={suggestions}
              query={query}
              handleSelect={this.handleQueryChange} />
          }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  suggestions: state.searchForm.suggestions,
  loading: state.searchForm.loading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(searchFormActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);