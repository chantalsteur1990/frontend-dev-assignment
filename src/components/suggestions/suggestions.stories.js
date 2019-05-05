import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Suggestions from './suggestions';

storiesOf('Suggestions', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const props = {
      suggestions: [{
        searchterm: 'heren trui',
        nrResults: 123
      }, {
        searchterm: 'kenzo trui',
        nrResults: 13
      }],
      handleSelect: action('selected'),
      query: text('query', 'tru')
    };
    return <Suggestions {...props} />
  });
