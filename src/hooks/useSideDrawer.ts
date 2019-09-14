import { useState, useCallback } from 'react';

export const useSideDrawer = (initialVal: boolean = false) => {
  const [toggle, setToggle] = useState<boolean | any>(initialVal);

  const onOpen = useCallback(() => {
    setToggle(true);
  }, []);

  const onClose = useCallback(() => {
    setToggle(false);
  }, []);

  return [toggle, onOpen, onClose];
};
