import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../modules/store';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

export const withRouter = (Component: any) => (props: any) => (
  <BrowserRouter>
    <Component {...props} />
  </BrowserRouter>
);

export const withHistory = (Component: any) => (props: any) => (
  <Router history={history}>
    <Component {...props} />
  </Router>
);

export const withProvider = (Component: any) => (props: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <Component {...props} />
    </BrowserRouter>
  </Provider>
);
