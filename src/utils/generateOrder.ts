import { ORGAN } from '../enum/organ';
import {
  DEFAULT_ORGAN_AMOUNT,
  HEART_BONUS_AMOUNT,
  LIVER_BONUS_AMOUNT,
  LUNG_BONUS_AMOUNT,
} from '../constants';

const heartBonus = (purchasedRatio: number) =>
  Math.floor(purchasedRatio / HEART_BONUS_AMOUNT);
const liverBonus = (purchasedRatio: number) =>
  Math.floor(purchasedRatio / LIVER_BONUS_AMOUNT);
const lungBonus = (purchasedRatio: number) =>
  Math.floor(purchasedRatio / LUNG_BONUS_AMOUNT);

/**
 * Generate an order string based on purchased organ and ratio.
 * @param purchasedOrgan The organ being purchased
 * @param purchasedRatio The purchase ratio of the main purchased organ
 * @returns The order string in the required format
 */
export const generateOrder = (
  purchasedOrgan: string,
  purchasedRatio: number,
): string => {
  const organMap: Record<string, string> = {
    [ORGAN.HEART]: `heart ${
      purchasedRatio + heartBonus(purchasedRatio)
    }, liver ${DEFAULT_ORGAN_AMOUNT}, lung ${DEFAULT_ORGAN_AMOUNT}`,
    [ORGAN.LIVER]: `heart ${DEFAULT_ORGAN_AMOUNT}, liver ${purchasedRatio}, lung ${liverBonus(
      purchasedRatio,
    )}`,
    [ORGAN.LUNG]: `heart ${lungBonus(purchasedRatio)}, liver ${lungBonus(
      purchasedRatio,
    )}, lung ${purchasedRatio}`,
  };

  const defaultOrder = `heart ${DEFAULT_ORGAN_AMOUNT}, liver ${DEFAULT_ORGAN_AMOUNT}, lung ${DEFAULT_ORGAN_AMOUNT}`;

  return organMap[purchasedOrgan] || defaultOrder;
};
