import { OrganOrder } from '../types/organOrder';
import { generateOrder } from './generateOrder';

/**
 * Calculate organ order based on input order details.
 *
 * @param order The organ order details
 * @returns The calculated organ order string
*/
export const calculateOrgans = (order: OrganOrder): string => {
  const { cash, price, organ } = order;
  const purchasedRatio = Math.floor(cash / price);

  return generateOrder(organ, purchasedRatio);
};
