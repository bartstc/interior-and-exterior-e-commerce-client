import { useState, useCallback } from 'react';

export const useToggle = (initialVal: boolean = false) => {
  const [toggle, setToggle] = useState<boolean | any>(initialVal);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [toggle, onToggle];
};
