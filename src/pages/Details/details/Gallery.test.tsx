import React from 'react';
import { render, fireEvent, wait, act } from '@testing-library/react';
import { GalleryProps, Gallery } from './Gallery.component';

describe('<Gallery />', () => {
  const props: GalleryProps = {
    imageUrls: ['a', 'b', 'c']
  };

  const setup = (props: GalleryProps) => {
    const utils = render(<Gallery {...props} />);
    const preview = utils.getByTestId('Preview');
    const images = utils.container.querySelectorAll('img');

    return { ...utils, preview, images };
  };

  it('renders correctly', () => {
    const { asFragment } = setup(props);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('preview image', () => {
    it('contains correct style rule and class', () => {
      jest.useFakeTimers();
      const { preview, images } = setup(props);
      expect(preview).toHaveStyle('background-image: url(a)');

      // warning: code that causes React state updates should be wrapped into act(...)
      act(() => {
        fireEvent.click(images[1]);
      });
      expect(preview).toHaveStyle('background-image: url(http://localhost/b)');
      expect(preview).toHaveClass('fade-in');

      act(() => {
        jest.runAllTimers();
      });
      expect(preview).not.toHaveClass('fade-in');
    });
  });
});
