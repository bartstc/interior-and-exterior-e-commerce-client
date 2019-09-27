import React from 'react';

import { Overlay } from './Backdrop.styles';

export interface BackdropProps {
  show: boolean;
  handleClose: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({ show, handleClose }) => (
  <Overlay data-testid="Overlay" show={show} onClick={handleClose} />
);
