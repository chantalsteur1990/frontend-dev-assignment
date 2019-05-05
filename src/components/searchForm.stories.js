import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

import SearchForm from './searchForm';

storiesOf('SearchForm', module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add('basic', () => <SearchForm />);
