import React from 'react';
import { Route } from 'react-router-dom';

import { AuthWrapper } from './Auth.styles';

import { SignUp } from './auth/SignUp.component';
import { SignIn } from './auth/SignIn.component';

export const Auth: React.FC = () => {
  return (
    <AuthWrapper>
      <Route exact path="/account" component={SignIn} />
      <Route exact path="/account/register" component={SignUp} />
    </AuthWrapper>
  );
};
