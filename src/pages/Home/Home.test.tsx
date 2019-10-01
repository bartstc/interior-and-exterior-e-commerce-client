import { render, fireEvent } from '@testing-library/react';
import { HomeProps, _Home } from './Home.component';
import { withRouter } from '../../utils/testUtils';

const HomeWithProvider = withRouter(_Home);

describe('<Home />', () => {
  const mockFetchProductsByType = jest.fn();
  const props: HomeProps = {
    fetchProductsByType: mockFetchProductsByType
  };

  const setup = (props: HomeProps) => {
    const utils = render(HomeWithProvider(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls `fetchProductsByType` action', () => {
    const { getByText } = setup(props);
    fireEvent.click(getByText('Clocks'));

    expect(mockFetchProductsByType).toBeCalledTimes(1);
    expect(mockFetchProductsByType).toBeCalledWith('clocks');
  });
});
