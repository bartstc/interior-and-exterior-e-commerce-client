import { useState, ChangeEvent, FormEvent } from 'react';

export const useForm = (
  callback: () => void,
  initState: { [key: string]: string }
) => {
  const [values, setValues] = useState(initState);

  const handleSubmit = (e: FormEvent) => {
    if (e) e.preventDefault();
    callback();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const reset = () => {
    setValues(initState);
  };

  return {
    handleChange,
    handleSubmit,
    reset,
    values
  };
};
