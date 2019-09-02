import styled from 'styled-components';

import { fontWeight, device, color } from '../../utils/styles';

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.3em;

  @media ${device.laptop} {
    margin-bottom: 0;
  }

  input[type='range'] {
    -webkit-appearance: none;
    background: none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  input[type='range']::-ms-track {
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  input[type='range']::-moz-range-track {
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${color.black};
    margin-top: -5px;
    position: relative;
  }

  input[type='range']::-ms-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${color.black};
    margin-top: -5px;
    position: relative;
  }

  input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${color.black};
    margin-top: -5px;
    position: relative;
  }

  input[type='range']:focus {
    outline-color: ${color.gray};
    &::-webkit-slider-thumb:after {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: ${color.black};
      padding: 5px 10px;
      border: 2px solid ${color.black};
    }
    &::-ms-thumb:after {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: ${color.black};
      padding: 5px 10px;
      border: 2px solid ${color.black};
    }
    &::-moz-range-thumb:after {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: ${color.black};
      padding: 5px 10px;
      border: 2px solid ${color.black};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 1.5em;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: ${fontWeight.semiBold};
  text-align: start;
`;

export const Info = styled.span`
  margin-top: 0.2em;
  font-size: 0.8rem;
`;
