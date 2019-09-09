export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  isEmail?: boolean;
  isSecure?: boolean;
}

export interface Control {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  name: string;
  value: string;
  validationRules: ValidationRules;
  valid: boolean;
  touched: boolean;
  errorMsg: string;
}

export interface Controls {
  [key: string]: Control;
}
