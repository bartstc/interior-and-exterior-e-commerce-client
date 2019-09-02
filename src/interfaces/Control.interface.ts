export interface IValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  isEmail?: boolean;
  isSecure?: boolean;
}

export interface IControl {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  name: string;
  value: string;
  validationRules: IValidationRules;
  valid: boolean;
  touched: boolean;
  errorMsg: string;
}

export interface IControls {
  [key: string]: IControl;
}
