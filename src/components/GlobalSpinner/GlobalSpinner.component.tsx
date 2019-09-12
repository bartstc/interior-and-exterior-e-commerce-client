import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './GlobalSpinner.styles';

export const GlobalSpinner: React.FC = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);
