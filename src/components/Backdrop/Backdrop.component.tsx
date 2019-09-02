import React from 'react';

import { Overlay } from './Backdrop.styles';

interface IProps {
  show: boolean;
  handleClose: () => void;
}

export const Backdrop: React.FC<IProps> = ({ show, handleClose }) => (
  <Overlay show={show} onClick={handleClose} />
);
