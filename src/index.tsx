import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { GlobalStyle } from './utils/styles';
import { App } from './App';

const Index: React.FC = () => (
  <>
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(<Index />, document.getElementById('root'));
