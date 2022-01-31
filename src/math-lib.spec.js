import { expect } from 'chai';
import * as lib from './math-lib.js';

describe('MathLib', () => {
  it('should return number 11 of sum 10 + 1', () => {
    expect(lib.sum(10, 1)).to.eq(11);
  });

  it('should return number 1 of subtraction of 5 - 4', () => {
    expect(lib.subtract(5, 4)).to.eq(1);
  });
});
