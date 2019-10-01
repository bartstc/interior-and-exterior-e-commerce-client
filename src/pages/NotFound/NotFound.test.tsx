import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from './NotFound.component';

describe('<NotFound />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
