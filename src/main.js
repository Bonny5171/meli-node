import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import './assets/css/styles.sass';

const mountApp = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  mountApp,
);

if (module.hot) {
  module.hot.accept();
}
