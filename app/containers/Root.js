// @flow
import React from 'react';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';

import Routes from '../routes';

type RootType = {
  stores: {},
  history: {}
};

export default function Root({ stores, history }: RootType) {
  console.log(stores)
  return (
    <Provider {...stores}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}
