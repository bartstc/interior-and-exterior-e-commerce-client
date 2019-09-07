import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './GlobalSpinner.styles';

export const GlobalSpinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);
