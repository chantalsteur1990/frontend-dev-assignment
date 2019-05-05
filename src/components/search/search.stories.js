import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from './search';

const props = {
  handleChange: action('input changed'),
  handleClear: action('input cleared'),
  handleSubmit: action('input submitted'),
  handleKeyUp: action('key up'),
  value: 'trui'
};

storiesOf('Search', module)
  .add('basic', () => <Search {...props} />);
