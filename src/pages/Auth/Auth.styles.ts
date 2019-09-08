import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device, color, fontWeight } from '../../utils/styles';

interface IErrorProps {
  showError: boolean;
}

export const AuthWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  margin: 0 auto;
  padding-bottom: 2em;
  height: 100%;

  @media ${device.tablet} {
    width: 370px;
  }

  button {
    margin-top: 2em;
  }
`;

export const Title = styled.p`
  margin: 0.2em 0;
  margin-bottom: 0.8em;
  font-size: 1.1rem;
  line-height: 1em;
  text-align: center;
  width: 100%;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;

export const InfoText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1.8em;
  font-weight: ${fontWeight.regular};

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

export const AuthLink = styled(Link)`
  width: 100%;
  border: 1.5px solid ${color.black};
  background: ${color.white};
  color: ${color.black};
  padding: 0.8em 1.9em;
  text-transform: uppercase;
  font-weight: ${fontWeight.semiBold};
  font-size: 0.9rem;
  transition: all 0.15s ease-in-out;
  text-align: center;
  margin-top: 0.6em;

  &:hover {
    background: ${color.black};
    color: ${color.white};
  }
`;

export const Error = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: ${fontWeight.semiBold};
  color: ${color.white};
  line-height: 40px;
  width: 100%;
  background: #ff4a4a;
  padding: 0 0.9em;
  border-radius: 11px;
  height: ${(props: IErrorProps) => (props.showError ? '40px' : '0')};
  opacity: ${(props: IErrorProps) => (props.showError ? '1' : '0')};
  transition: all 0.15s ease-in-out;
`;
