import styled from 'styled-components';

import { color } from '../../utils/styles';

export const Overlay = styled.div`
  display: ${(props: { show: boolean }) => (props.show ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 6;
  left: 0;
  top: 0;
  background: ${color.black};
  opacity: 0.65;
`;
