// TODO: remove all any!

import React, { useState } from 'react';

import {
  GalleryWrapper,
  ImageList,
  ImageItem,
  Preview
} from './Gallery.styles';

import testImage from '../../../assets/chair.png';

export const Gallery: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string>(testImage);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  const showImage = (e: any) => {
    setPreviewUrl(e.target.src);
    setFadeIn(true);

    setTimeout(() => setFadeIn(false), 500);
  };

  const zoomIn = (e: any) => {
    e.target.style.backgroundSize = '200%';
  };

  const zoomOut = (e: any) => {
    e.target.style.backgroundSize = 'cover';
    e.target.style.backgroundPosition = 'center';
  };

  const zoomMove = (e: any) => {
    // Information about the position of the element
    let dimensions = e.target.getBoundingClientRect();

    // Calculate the position of the cursor inside the element (in pixels)
    let x = e.clientX - dimensions.left;
    let y = e.clientY - dimensions.top;

    // Calculate the position of the cursor as a percentage of the total width/height of the element
    let xpercent = Math.round(100 / (dimensions.width / x));
    let ypercent = Math.round(100 / (dimensions.height / y));

    // Update the background position of the image
    e.target.style.backgroundPosition = `${xpercent}% ${ypercent}%`;
  };

  return (
    <GalleryWrapper>
      <ImageList>
        <ImageItem onClick={showImage} src={testImage} alt="" />
        <ImageItem onClick={showImage} src={testImage} alt="" />
        <ImageItem onClick={showImage} src={testImage} alt="" />
      </ImageList>
      <Preview
        onMouseEnter={zoomIn}
        onMouseLeave={zoomOut}
        onMouseMove={zoomMove}
        className={`${fadeIn ? 'fade-in' : ''}`}
        bgUrl={previewUrl}
      ></Preview>
    </GalleryWrapper>
  );
};
