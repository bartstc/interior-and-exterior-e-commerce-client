import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { GlobalStyles } from './utils/styles';
import { StoreProvider } from './modules/store';
import { GlobalSpinner } from './components/GlobalSpinner/GlobalSpinner.component';
import { withSession } from './hoc/withSession';

const AuthApp = lazy(() => import('./AuthApp'));
const UnauthApp = lazy(() => import('./UnauthApp'));

const Index = withSession(({ isAuth }) => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<GlobalSpinner />}>
        {isAuth === null && <GlobalSpinner />}
        {isAuth === false && <UnauthApp />}
        {isAuth === true && <AuthApp />}
      </Suspense>
    </>
  );
});

ReactDOM.render(
  <StoreProvider>
    <Index />
  </StoreProvider>,
  document.getElementById('root')
);
