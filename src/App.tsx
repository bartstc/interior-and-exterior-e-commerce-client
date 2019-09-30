import React, { lazy, Suspense } from 'react';

import { GlobalStyles } from './utils/styles';
import { GlobalSpinner } from './components/GlobalSpinner/GlobalSpinner.component';
import { withSession } from './hoc/withSession';

const AuthApp = lazy(() => import('./AuthApp'));
const UnauthApp = lazy(() => import('./UnauthApp'));

export interface AppProps {
  isAuth: boolean | null;
}

export const _App: React.FC<AppProps> = ({ isAuth }) => (
  <>
    <GlobalStyles />
    <Suspense fallback={<GlobalSpinner />}>
      {isAuth === null && <GlobalSpinner />}
      {isAuth === false && <UnauthApp />}
      {isAuth === true && <AuthApp />}
    </Suspense>
  </>
);

export const App = withSession(_App);
