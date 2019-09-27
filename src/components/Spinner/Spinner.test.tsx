import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Spinner } from './Spinner.component';

afterEach(cleanup);

describe('<Spinner />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
