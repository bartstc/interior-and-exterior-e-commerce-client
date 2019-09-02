import styled from 'styled-components';

import { device } from '../../../utils/styles';

export const GalleryWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: 270px;
  display: flex;
  position: relative;

  @media ${device.mobileL} {
    height: 390px;
  }

  @media ${device.laptop} {
    height: 470px;
  }
`;

export const ImageList = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
  width: 60px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  padding: 5px;
  background: white;
`;

export const ImageItem = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const Preview = styled.div`
  width: 100%;
  cursor: pointer;
  flex: 1 1 100%;
  background-image: url('https://source.unsplash.com/user/chuttersnap/1600x900');
  background-image: ${(props: { bgUrl: string }) => `url('${props.bgUrl}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: background-size 0.3s;

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }

  &.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s ease-in 1 forwards;
  }
`;
