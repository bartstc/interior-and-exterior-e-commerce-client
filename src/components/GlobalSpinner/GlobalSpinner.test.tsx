import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { GlobalSpinner } from './GlobalSpinner.component';

afterEach(cleanup);

describe('<GlobalSpinner />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<GlobalSpinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
