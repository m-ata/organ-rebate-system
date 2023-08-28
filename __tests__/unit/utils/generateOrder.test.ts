import { generateOrder } from '../../../src/utils/generateOrder';
import { ORGAN } from '../../../src/enum/organ';

describe('generateOrder', () => {
  it('should generate the correct order string for heart', () => {
    const result = generateOrder(ORGAN.HEART, 5);
    expect(result).toBe('heart 6, liver 0, lung 0');
  });

  it('should generate the correct order string for liver', () => {
    const result = generateOrder(ORGAN.LIVER, 7);
    expect(result).toBe('heart 0, liver 7, lung 3');
  });

  it('should generate the correct order string for lung', () => {
    const result = generateOrder(ORGAN.LUNG, 10);
    expect(result).toBe('heart 2, liver 2, lung 10');
  });

  it('should generate the default order string for unknown organ', () => {
    const result = generateOrder('unknown', 5);
    expect(result).toBe('heart 0, liver 0, lung 0');
  });
});
