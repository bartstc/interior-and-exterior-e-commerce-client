import React from 'react';
import { render } from '@testing-library/react';
import { GlobalSpinner } from './GlobalSpinner.component';

describe('<GlobalSpinner />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<GlobalSpinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
