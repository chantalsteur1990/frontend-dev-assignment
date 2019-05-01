import React from 'react';
import { storiesOf, action } from '@storybook/react';

import Search from './search';

const props = {
  name: 'search',
  placeholder: 'Zoeken',
  ariaLabelInput: 'zoeken',
  ariaLabelClear: 'annuleren',
  ariaLabelSubmit: 'zoeken',
  handleChange: action('input changed'),
  handleClear: action('input cleared'),
  handleSubmit: action('input submitted'),
  showButtonClear: true
};

storiesOf('Search', module)
  .add('basic', () => <Search {...props} />);
