import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { _SearchForm } from './SearchForm.component';

beforeEach(cleanup);

describe('<SearchForm />', () => {
  const mockToggleSearchForm = jest.fn();
  const mockFetchProductsByQuery = jest.fn();

  const props = {
    toggled: false,
    toggleSearchForm: mockToggleSearchForm,
    fetchProductsByQuery: mockFetchProductsByQuery,
    location: {
      pathname: '/shop'
    }
  };

  const setup = (props: any) => {
    const utils = render(<_SearchForm {...props} />);
    const input = utils.getByPlaceholderText(
      'Search for products ...'
    ) as HTMLInputElement;
    const form = utils.getByTestId('Form');

    return { ...utils, input, form };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should update `query` value', () => {
    const { input } = setup(props);
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'clocks' } });
    expect(input.value).toBe('clocks');
  });
});
