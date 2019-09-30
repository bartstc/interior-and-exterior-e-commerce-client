import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { _SearchForm } from './SearchForm.component';

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
    const form = utils.container.querySelector('form') as HTMLFormElement;

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

  // onSubmit function is not testable, should i refactor the way it works?
  // describe('when submit', () => {
  //   it('calls `toggleSearchForm` func', () => {
  //     const { form } = setup(props);
  //     fireEvent.submit(form);
  //     expect(mockToggleSearchForm).toHaveBeenCalledTimes(1);
  //   });

  //   it('calls `fetchProductsByQuery` with `clocks` argument', () => {
  //     const { form, input } = setup(props);
  //     fireEvent.change(input, { target: { value: 'clocks' } });
  //     fireEvent.submit(form);
  //     expect(mockFetchProductsByQuery).toHaveBeenCalledTimes(2);
  //   });
  // });
});
