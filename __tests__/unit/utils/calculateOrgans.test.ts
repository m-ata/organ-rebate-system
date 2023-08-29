import { calculateOrgans } from '../../../src/utils/calculateOrgans';
import { OrganOrder } from '../../../src/types/organOrder';
import { ORGAN } from '../../../src/enum/organ';

describe('calculateOrgans', () => {
  it('should calculate order for heart organ', () => {
    const order: OrganOrder = {
      organ: ORGAN.HEART,
      cash: 50,
      price: 3,
    };
    const result = calculateOrgans(order);
    expect(result).toBe('heart 21, liver 0, lung 0');
  });

  it('should calculate order for liver organ', () => {
    const order: OrganOrder = {
      organ: ORGAN.LIVER,
      cash: 20,
      price: 5,
    };
    const result = calculateOrgans(order);
    expect(result).toBe('heart 0, liver 4, lung 2');
  });

  it('should calculate order for lung organ', () => {
    const order: OrganOrder = {
      organ: ORGAN.LUNG,
      cash: 40,
      price: 8,
    };
    const result = calculateOrgans(order);
    expect(result).toBe('heart 1, liver 1, lung 5');
  });
});
