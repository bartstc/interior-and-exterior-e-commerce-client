import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from './Spinner.component';

describe('<Spinner />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
