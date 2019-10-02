import { isEmpty } from './isEmpty';

describe('`isEmpty` utility', () => {
  it('return false', () => {
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
  });

  it('return true', () => {
    expect(isEmpty('string')).toBeFalsy();
    expect(isEmpty({ test: 'test' })).toBeFalsy();
    expect(isEmpty([1, 2, 3])).toBeFalsy();
  });
});
