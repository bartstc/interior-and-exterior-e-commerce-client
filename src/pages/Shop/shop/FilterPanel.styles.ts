import styled from 'styled-components';

import { device, color, fontWeight } from '../../../utils/styles';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  position: relative;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3em;
  }

  @media ${device.laptop} {
    max-width: 100%;
    padding-right: 130px;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2.4em;
  }
`;

export const GridOptions = styled.div`
  display: none;
  position: absolute;
  top: 1.3em;
  right: 0;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const GridOptionBtn = styled.button`
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  cursor: pointer;
  color: ${(props: { active: boolean }) =>
    props.active ? color.black : '#bbb'};
`;

export const QueryResult = styled.p`
  font-size: 1.1rem;
  font-weight: ${fontWeight.bold};
  margin: 1em 0;
  color: ${color.black};
  width: 100%;
  text-align: center;

  @media ${device.tablet} {
    font-size: 1.4rem;
    margin: 1em 0;
  }

  @media ${device.laptop} {
    margin: 1.8em 0;
  }
`;
