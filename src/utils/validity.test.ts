import { validate } from './validity';

describe('validity utility', () => {
  describe('password', () => {
    let password = {
      value: '',
      controlName: 'password',
      rules: {
        required: true,
        minLength: 4,
        maxLength: 20,
        isEmail: false,
        isSecure: true
      }
    };

    it('returns `Password field is required` message', () => {
      const { value, controlName, rules } = password;
      expect(validate(value, controlName, rules)).toEqual({
        isValid: false,
        errorMsg: 'Password field is required'
      });
    });

    it('returns `Password must be at least 4 characters` message', () => {
      password.value = 'a';
      const { value, controlName, rules } = password;
      expect(validate(value, controlName, rules)).toEqual({
        isValid: false,
        errorMsg: 'Password must be at least 4 characters'
      });
    });

    it('returns `Password must be no longer than 20 characters` message', () => {
      password.value = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      const { value, controlName, rules } = password;
      expect(validate(value, controlName, rules)).toEqual({
        isValid: false,
        errorMsg: 'Password must be no longer than 20 characters'
      });
    });

    it('returns `Password too weak` message', () => {
      password.value = 'John1234';
      const { value, controlName, rules } = password;
      expect(validate(value, controlName, rules)).toEqual({
        isValid: false,
        errorMsg: 'Password too weak'
      });
    });

    it('returns true and empty error message', () => {
      password.value = 'John123$';
      const { value, controlName, rules } = password;
      expect(validate(value, controlName, rules)).toEqual({
        isValid: true,
        errorMsg: ''
      });
    });
  });

  describe('email', () => {
    let email = {
      value: 'johndoe',
      controlName: 'email',
      rules: {
        required: true,
        isEmail: true
      }
    };

    it('returns `Email is invalid` message', () => {
      const { value, controlName, rules } = email;
      expect(validate(value, controlName, rules)).toEqual({
        isValid: false,
        errorMsg: 'Email is invalid'
      });
    });

    it('returns true and empty error message', () => {
      email.value = 'johndoe@gmail.com';
      const { value, controlName, rules } = email;
      expect(validate(value, controlName, rules)).toEqual({
        isValid: true,
        errorMsg: ''
      });
    });
  });
});
