import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Store } from '../modules/rootReducer';
import { checkSession } from '../modules/user/user.actions';
import { selectIsAuth } from '../modules/user/user.selectors';

interface WithSessionSelection {
  isAuth: boolean;
}

interface WithSessionProps extends WithSessionSelection {
  checkSession: typeof checkSession;
}

export const withSession = (Component: React.FC<WithSessionSelection>) => {
  const WithSession: React.FC<WithSessionProps> = ({
    isAuth,
    checkSession
  }) => {
    useEffect(() => {
      checkSession();
    }, [checkSession]);

    return <Component isAuth={isAuth} />;
  };

  const mapStateToProps = createStructuredSelector<Store, WithSessionSelection>(
    { isAuth: selectIsAuth }
  );

  return connect(
    mapStateToProps,
    { checkSession }
  )(WithSession);
};
