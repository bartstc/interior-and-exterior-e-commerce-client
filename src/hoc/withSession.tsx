import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Store } from '../modules/rootReducer';
import { checkSession } from '../modules/user/user.actions';
import { selectIsAuth } from '../modules/user/user.selectors';

// https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb

interface WithSessionSelection {
  isAuth: boolean | null;
}

interface WithSessionProps extends WithSessionSelection {
  checkSession: typeof checkSession;
}

export const withSession = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WithSession: React.FC<WithSessionProps> = ({
    isAuth,
    checkSession,
    ...props
  }) => {
    useEffect(() => {
      checkSession();
    }, [checkSession]);

    return <Component {...(props as P)} isAuth={isAuth} />;
  };

  const mapStateToProps = createStructuredSelector<Store, WithSessionSelection>(
    { isAuth: selectIsAuth }
  );

  return connect(
    mapStateToProps,
    { checkSession }
  )(WithSession);
};
