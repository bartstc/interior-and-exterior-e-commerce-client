import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Controls } from '../pages/Auth/types';
import { clearErrors } from '../modules/user/user.actions';
import { validate } from '../utils/validity';

type ClearErrors = typeof clearErrors;

type UseForm = (
  initState: Controls,
  authError: string | null,
  clearErrors: ClearErrors,
  cb: () => void
) => {
  controls: Controls;
  errorMsg: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
};

export const useForm: UseForm = (initState, authError, clearErrors, cb) => {
  const [controls, setControls] = useState<Controls>(initState);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (authError) {
      setErrorMsg(authError);
      setControls(initState);
    }

    return () => {
      clearErrors();
    };
  }, [authError, clearErrors, initState]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedControls: Controls = {
      ...controls,
      [e.target.name]: {
        ...controls[e.target.name],
        value: e.target.value,
        valid: validate(
          e.target.value,
          e.target.name,
          controls[e.target.name].validationRules
        ).isValid,
        errorMsg: validate(
          e.target.value,
          e.target.name,
          controls[e.target.name].validationRules
        ).errorMsg,
        touched: true
      }
    };

    setControls(updatedControls);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    cb();
  };

  return {
    controls,
    errorMsg,
    onChange,
    onSubmit
  };
};
