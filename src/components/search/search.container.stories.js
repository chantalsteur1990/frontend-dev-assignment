import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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
