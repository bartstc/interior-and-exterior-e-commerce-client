import { ValidationRules } from '../pages/Auth/types';

export const validate = (
  value: string,
  controlName: string,
  rules: ValidationRules
) => {
  let isValid = true;
  let errorMsg = '';

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
    if (!isValid && !errorMsg.length)
      errorMsg = `${controlName} field is required`;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    if (!isValid && !errorMsg.length)
      errorMsg = `${controlName} must be at least ${rules.minLength} characters`;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    if (!isValid && !errorMsg.length)
      errorMsg = `${controlName} must be no longer than ${rules.maxLength} characters`;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
    if (!isValid && !errorMsg.length) errorMsg = `email is invalid`;
  }

  if (rules.isSecure) {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    isValid = pattern.test(value) && isValid;
    if (!isValid && !errorMsg.length) errorMsg = `password too weak`;
  }

  return {
    isValid,
    errorMsg: errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1)
  };
};
