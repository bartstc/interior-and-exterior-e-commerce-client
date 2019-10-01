import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../modules/store';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

export const withRouter = <P extends object>(
  Component: React.ComponentType<P>
) => (props: P) => (
  <BrowserRouter>
    <Component {...props} />
  </BrowserRouter>
);

export const withHistory = <P extends object>(
  Component: React.ComponentType<P>
) => (props: P) => (
  <Router history={history}>
    <Component {...props} />
  </Router>
);

export const withProvider = <P extends object>(
  Component: React.ComponentType<P>
) => (props: P) => (
  <Provider store={store}>
    <BrowserRouter>
      <Component {...props} />
    </BrowserRouter>
  </Provider>
);
