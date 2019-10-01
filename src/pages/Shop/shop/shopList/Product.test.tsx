import { render } from '@testing-library/react';
import { withRouter } from '../../../../utils/testUtils';
import { Product, ProductProps } from './Product.component';

const ProductWithRouter = withRouter(Product);

describe('<Product />', () => {
  const props: ProductProps = {
    productData: {
      character: 'modern',
      collection: 'clocks',
      color: 'black',
      description: 'lorem ipsum',
      id: '1',
      images: ['aa', 'bb'],
      name: 'Clock',
      price: '200',
      type: 'clocks'
    }
  };

  const setup = (props: ProductProps) => {
    const utils = render(ProductWithRouter(props));
    return { ...utils };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });
});
