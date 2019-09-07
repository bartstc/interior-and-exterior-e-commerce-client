import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import { rootReducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const StoreProvider: React.FC<IProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
