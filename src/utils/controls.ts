import { Controls } from '../pages/Auth/types';

export const signInControls: Controls = {
  email: {
    label: 'Enter email',
    placeholder: '',
    type: 'email',
    id: 'signin-email',
    name: 'email',
    value: '',
    validationRules: {
      required: true,
      isEmail: true
    },
    valid: false,
    touched: false,
    errorMsg: ''
  },
  password: {
    label: 'Enter password',
    placeholder: '',
    type: 'password',
    id: 'signin-password',
    name: 'password',
    value: '',
    validationRules: {
      required: true
    },
    valid: false,
    touched: false,
    errorMsg: ''
  }
};

export const signUpControls: Controls = {
  username: {
    label: 'Enter username',
    placeholder: '',
    type: 'text',
    id: 'signup-username',
    name: 'username',
    value: '',
    validationRules: {
      required: true,
      minLength: 4,
      maxLength: 20
    },
    valid: false,
    touched: false,
    errorMsg: ''
  },
  email: {
    label: 'Enter email',
    placeholder: '',
    type: 'email',
    id: 'signup-email',
    name: 'email',
    value: '',
    validationRules: {
      required: true,
      isEmail: true
    },
    valid: false,
    touched: false,
    errorMsg: ''
  },
  password: {
    label: 'Enter password',
    placeholder: '',
    type: 'password',
    id: 'signup-password',
    name: 'password',
    value: '',
    validationRules: {
      required: true,
      isSecure: true,
      minLength: 8,
      maxLength: 20
    },
    valid: false,
    touched: false,
    errorMsg: ''
  }
};
