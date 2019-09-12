import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './index.css';

import { GlobalStyles } from './utils/styles';
import { StoreProvider } from './modules/store';
import { Store } from './modules/rootReducer';
import { selectIsAuth } from './modules/user/user.selectors';
import { GlobalSpinner } from './components/GlobalSpinner/GlobalSpinner.component';
import { checkSession } from './modules/user/user.actions';

const AuthApp = lazy(() => import('./AuthApp'));
const UnauthApp = lazy(() => import('./UnauthApp'));

interface IndexSelection {
  isAuth: boolean;
}

interface IProps extends IndexSelection {
  checkSession: typeof checkSession;
}

const _Index: React.FC<IProps> = ({ isAuth, checkSession }) => {
  useEffect(() => {
    console.log('Check session');
    checkSession();
  }, [checkSession]);

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
};

const mapStateToProps = createStructuredSelector<Store, IndexSelection>({
  isAuth: selectIsAuth
});
const Index = connect(
  mapStateToProps,
  { checkSession }
)(_Index);

ReactDOM.render(
  <StoreProvider>
    <Index />
  </StoreProvider>,
  document.getElementById('root')
);
