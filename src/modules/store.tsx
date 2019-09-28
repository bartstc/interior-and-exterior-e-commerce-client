import React from 'react';
import { createStore, applyMiddleware, Store as ReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { rootSaga } from './rootSaga';
import rootReducer, { Store } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store: ReduxStore<Store> = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const StoreProvider: React.FC<IProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);
