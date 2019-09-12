import { useEffect, useState } from 'react';

import imgLoader from '../assets/imgLoader.gif';

export const useImagePreloader = (src: string) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(undefined);
  useEffect(() => {
    const mainImage = new Image();
    const fallbackImage = new Image();

    mainImage.onload = () => {
      setCurrentSrc(src);
    };
    fallbackImage.onload = () => {
      setCurrentSrc(imgLoader);
    };

    mainImage.src = src;
    fallbackImage.src = imgLoader;
  }, [src, imgLoader]);

  return currentSrc;
};
