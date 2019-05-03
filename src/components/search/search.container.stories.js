import React from 'react';
import { storiesOf, action } from '@storybook/react';

import SearchContainer from './search.container';

const props = {
  name: 'search',
  placeholder: 'Zoeken',
  ariaLabelInput: 'zoeken',
  ariaLabelClear: 'annuleren',
  ariaLabelSubmit: 'zoeken',
  handleSearch: action('do search'),
  handleSuggestions: action('load suggestions'),
  handleQueryChange: action('handle query change'),
  value: '',
};

storiesOf('SearchContainer', module)
  .add('basic', () => <SearchContainer {...props} />);
