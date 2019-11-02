import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { StoreProvider } from './modules/store';
import { App } from './App';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

// npm run test -- --coverage --watchAll=false
