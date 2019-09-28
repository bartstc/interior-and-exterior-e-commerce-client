import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Footer } from './Footer.component';

beforeEach(cleanup);

describe('<Footer />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
