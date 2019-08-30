import { useState } from 'react';

export const useSideDrawer = (initialVal: boolean = false) => {
  const [toggle, setToggle] = useState<boolean | any>(initialVal);

  const onOpen = () => setToggle(true);

  const onClose = () => setToggle(false);

  return [toggle, onOpen, onClose];
};
