import { expect } from 'chai';
import * as lib from './math-lib.js';

describe('MathLib', () => {
  it('should return correct sum of 22 + 83', () => {
    expect(lib.sum(22, 82)).to.eq(104);
  });

  it('should return correct subtract of 88 - 12', () => {
    expect(lib.subtract(88, 12)).to.eq(76);
  });
});
