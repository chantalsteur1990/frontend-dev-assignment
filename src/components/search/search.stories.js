import React from 'react';
import { storiesOf, action } from '@storybook/react';

import Search from './search';

const props = {
  name: 'search',
  placeholder: 'Zoeken',
  ariaLabel: 'zoeken',
  handleChange: action('input changed')
};

storiesOf('Search', module)
  .add('basic', () => <Search {...props} />);

