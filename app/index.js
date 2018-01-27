import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import './app.global.css';

import { stores, history } from './store';

render(
  <AppContainer>
    <Root stores={stores} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(['./containers/Root', './store'], () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot stores={stores} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
