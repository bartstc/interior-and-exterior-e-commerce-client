import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { GlobalStyles } from './utils/styles';
import { StoreProvider } from './modules/store';
import { createStructuredSelector } from 'reselect';
import { IStore } from './modules/rootReducer';
import { selectIsAuth } from './modules/user/user.selectors';
import { connect } from 'react-redux';
import { GlobalSpinner } from './components/GlobalSpinner/GlobalSpinner.component';

const AuthApp = lazy(() => import('./AuthApp'));
const UnauthApp = lazy(() => import('./UnauthApp'));

interface IProps {
  isAuth: boolean;
}

const _Index: React.FC<IProps> = ({ isAuth }) => (
  <>
    <GlobalStyles />
    <Suspense fallback={<GlobalSpinner />}>
      {isAuth === null && <GlobalSpinner />}
      {isAuth === false && <UnauthApp />}
      {isAuth === true && <AuthApp />}
    </Suspense>
  </>
);

interface IndexSelection {
  isAuth: boolean;
}

const mapStateToProps = createStructuredSelector<IStore, IndexSelection>({
  isAuth: selectIsAuth
});

const Index = connect(mapStateToProps)(_Index);

ReactDOM.render(
  <StoreProvider>
    <Index />
  </StoreProvider>,
  document.getElementById('root')
);
