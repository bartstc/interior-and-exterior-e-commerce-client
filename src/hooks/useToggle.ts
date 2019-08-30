import { useState } from 'react';

export const useToggle = (initialVal: boolean = false) => {
  const [toggle, setToggle] = useState<boolean | any>(initialVal);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, onToggle];
};
