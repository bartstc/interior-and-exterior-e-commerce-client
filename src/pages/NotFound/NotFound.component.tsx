import React from 'react';
import { PageNotFound, Status, Message } from './NotFound.styles';

export const NotFound: React.FC = () => (
  <PageNotFound>
    <Status>404</Status>
    <Message>Page not found</Message>
  </PageNotFound>
);
